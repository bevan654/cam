'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../../components/Navbar'

  // Map customization IDs to friendly names
  const CUSTOMIZATION_NAMES: { [key: string]: string } = {
    // Bread options
    'D134': 'White Bread',
    'D129': 'Italian Bread',
    'D133': 'Flatbread',
    'D131': 'Wheat Bread',
    'D854': 'Multigrain Flatbread',
    
    // Cheese options
    'D139': 'American Cheese',
    'D138': 'Swiss Cheese',
    'D136': 'Cheddar Cheese',
    
    // Protein options
    'D518': 'Ham',
    'D317': 'Steak',
    
    // Vegetable options
    'D171': 'Pickles',
    'D169': 'Jalapeños',
    'D170': 'Spinach',
    'D163': 'Tomatoes',
    'D164': 'Onions',
    'D165': 'Cucumbers',
    'D166': 'Green Peppers',
    'D173': 'Banana Peppers',
    'D167': 'Black Olives',
    'D162': 'Lettuce',
    
    // Sauce options
    'D145': 'Ranch',
    'D147': 'BBQ Sauce',
    'D149': 'Hot Sauce',
    'D154': 'Honey Mustard',
    'D156': 'Chipotle Southwest',
    'D157': 'Light Mayonnaise',
    'D146': 'Italian Dressing',
    'D141': 'Mayonnaise',
    'D151': 'Oil & Vinegar',
    'D144': 'Ketchup',
    'D174': 'Vinegar',
    'D153': 'Sweet Onion',
    'D143': 'Mustard',
    'D668': 'Sriracha',
    'D1478': 'Buffalo Sauce',
    
    // Seasonings
    'D160': 'Pepper',
    'D159': 'Salt',
    
    // Extra options
    '2575': 'Double Meat',
    '2594': 'Extra Bread',
    '2590': 'Extra Toppings',
    '3668': 'Premium Sauces',
    '2588': 'Extra Sauce',
    '2407': 'Extra Cheese',
    '2435': 'Premium Toppings',
    
    // Legacy mappings
    'B1': 'Italian Bread',
    'B2': 'Wheat Bread', 
    'B3': 'Flatbread',
    'B4': 'Multigrain Bread',
    'B5': 'Gluten Free Bread',
    'P1': 'Turkey',
    'P2': 'Ham',
    'P3': 'Chicken Breast',
    'P4': 'Roast Beef',
    'P5': 'Tuna',
    'P6': 'Veggie Patty',
    'C1': 'American Cheese',
    'C2': 'Swiss Cheese',
    'C3': 'Pepper Jack',
    'V1': 'Lettuce',
    'V2': 'Tomato',
    'V3': 'Cucumber',
    'V4': 'Onion',
    'V5': 'Bell Pepper',
    'V6': 'Olives',
    'V7': 'Pickles',
    'V8': 'Spinach',
    'V9': 'Jalapeños',
    'V10': 'Carrots',
    'S1': 'Mayonnaise',
    'S2': 'Mustard',
    'S3': 'Ketchup',
    'S4': 'Ranch',
    'S5': 'BBQ Sauce',
    'S6': 'Hot Sauce',
    'S7': 'Sweet Onion',
    'S8': 'Honey Mustard',
    'S9': 'Chipotle Southwest',
    'S10': 'Light Mayonnaise',
    'S11': 'Oil',
    'S12': 'Vinegar',
    'S13': 'Salt',
    'S14': 'Pepper',
    'S15': 'Oregano',
    'E1': 'Bacon',
    'E2': 'Avocado',
    'E3': 'Guacamole',
    'E4': 'Double Meat',
    'E5': 'Extra Cheese',
    'E6': 'Extra Vegetables',
    'SE1': 'Salt',
    'SE2': 'Pepper',
    'EG1': 'Egg',
    'CO1': 'Chocolate Chip Cookie',
    'CO2': 'Oatmeal Raisin Cookie',
    'CO3': 'Sugar Cookie',
    'O1': 'Extra Sauce',
    'O2': 'No Salt',
    'O3': 'Light Sauce'
  }

type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  buildId?: string
  customizations?: string[]
}

type Option = {
  Id: string
  Price: number
  IsDefault: boolean
  Customizations?: Array<{ Id: string; Price: number }>
}

type OptionGroup = {
  Options: Option[]
  MinimumQuantity: number
  MaximumQuantity: number
}

type Build = {
  Id: string
  BuildTypeId: string
  BuildName: string
  Price: number
  Nutrition?: Record<string, number>
  BaseNutrition?: Record<string, number>
  Options?: Record<string, OptionGroup>
}

type Product = {
  MasterProductId: string
  Name: string
  Description: string
  ImageUrl: string
  Images?: Array<{ MediaType: string; ImageUrl: string }>
  Builds: Build[]
  Categories: Array<string | { Id: string; SortOrder: number }>
}

type Category = {
  Id: string
  Name: string
  Description?: string
  ImageUrl?: string
  Images?: Array<{ MediaType: string; ImageUrl: string }>
  SortOrder: number
  Categories?: Category[]
}

type MenuData = {
  Data: {
    LocationId: string
    PricingScheme: string
    Id: string
    Culture: string
    Categories: Category[]
    Products: Product[]
  }
}

type CustomizationModalProps = {
  isOpen: boolean
  onClose: () => void
  product: Product | null
  build: Build | null
  onAddToCart: (product: Product, build: Build, customizations: string[]) => void
}

function CustomizationModal({ isOpen, onClose, product, build, onAddToCart }: CustomizationModalProps) {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({})
  const [totalPrice, setTotalPrice] = useState(0)

  // Helper function to get image URL
  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '🥪'
    // Add subway.com prefix to image URLs
    return `https://subway.com${imagePath}`
  }

  // Function to get friendly name for option type
  const getOptionTypeName = (type: string): string => {
    const typeNames: { [key: string]: string } = {
      'Bread': 'Bread Type',
      'Protein': 'Protein',
      'Cheese': 'Cheese',
      'Vegetable': 'Vegetables',
      'Sauce': 'Sauces',
      'Seasonings': 'Seasonings',
      'Extra': 'Extras',
      'Egg': 'Egg Options',
      'Cookies': 'Cookies',
      'Other': 'Other Options'
    }
    return typeNames[type] || type
  }

  // Auto-grab customization names from context and patterns
  const autoGrabCustomizationName = (id: string, optionType: string): string => {
    // Advanced pattern-based name generation
    const patterns = {
      // Bread patterns
      'D129': 'Italian Herb & Cheese',
      'D131': 'Hearty Italian',
      'D133': 'Honey Oat', 
      'D134': 'White',
      'D854': 'Multigrain',
      
      // Cheese patterns  
      'D136': 'Provolone',
      'D138': 'Swiss',
      'D139': 'American',
      
      // Protein patterns
      'D518': 'Leg Ham',
      'D306': 'Turkey Breast',
      'D317': 'Steak',
      
      // Vegetable patterns
      'D162': 'Lettuce',
      'D163': 'Tomatoes', 
      'D164': 'Red Onions',
      'D165': 'Cucumbers',
      'D166': 'Capsicum',
      'D167': 'Olives',
      'D169': 'Jalapeños',
      'D170': 'Baby Spinach',
      'D171': 'Pickles',
      'D173': 'Banana Peppers',
      
      // Sauce patterns
      'D141': 'Mayonnaise',
      'D143': 'Seeded Mustard',
      'D144': 'Tomato Sauce',
      'D145': 'Ranch',
      'D146': 'Italian Dressing',
      'D147': 'BBQ Sauce', 
      'D149': 'Chilli',
      'D151': 'Oil',
      'D153': 'Sweet Onion',
      'D154': 'Honey Mustard',
      'D156': 'Southwest',
      'D157': 'Light Mayo',
      'D174': 'Vinegar',
      'D668': 'Sriracha',
      'D1478': 'Buffalo Sauce',
      
      // Seasonings
      'D159': 'Salt',
      'D160': 'Pepper',
      
      // Extras
      '2407': 'Extra Cheese',
      '2575': 'Double Protein',
      '2588': 'Extra Sauce',
      '2590': 'Premium Toppings',
      '2594': 'Extra Bread',
      '3668': 'Gourmet Sauces'
    }
    
    // First check if we have a specific pattern
    if (patterns[id as keyof typeof patterns]) {
      return patterns[id as keyof typeof patterns]
    }
    
    // Context-aware generation based on option type
    const typeMap = {
      'Bread': 'Bread',
      'Cheese': 'Cheese', 
      'Protein': 'Protein',
      'Vegetable': 'Vegetable',
      'Sauce': 'Sauce',
      'Seasonings': 'Seasoning',
      'Extra': 'Extra'
    }
    
    const typeName = typeMap[optionType as keyof typeof typeMap] || optionType
    
    // Generate intelligent names based on ID patterns
    if (id.startsWith('D')) {
      return `${typeName} Option ${id.slice(1)}`
    } else if (id.match(/^\d+$/)) {
      return `${typeName} #${id}`
    } else {
      return `${typeName} ${id}`
    }
  }

  // Enhanced getCustomizationName function that uses automatic mapping
  const getCustomizationName = (id: string, optionType?: string): string => {
    // First try the manual mapping
    if (CUSTOMIZATION_NAMES[id]) {
      return CUSTOMIZATION_NAMES[id]
    }
    
    // Use auto-grab system with context awareness
    if (optionType) {
      return autoGrabCustomizationName(id, optionType)
    }
    
    // Fallback to basic automatic mapping
    return generateCustomizationName(id, optionType || 'Unknown', [])
  }

  // Enhanced generateCustomizationName with better fallback logic
  const generateCustomizationName = (id: string, optionType: string, allOptions: any[]): string => {
    // First try to find the option in the actual data
    if (allOptions && Array.isArray(allOptions)) {
      const option = allOptions.find(opt => opt.Id === id)
      if (option) {
        // Since Option type doesn't have Name, Description, or DisplayName,
        // we'll generate intelligent names based on ID patterns
        return generateIntelligentName(id, optionType)
      }
    }
    
    // Fallback to basic pattern matching
    return generateIntelligentName(id, optionType)
  }

  // Generate intelligent names based on ID patterns
  const generateIntelligentName = (id: string, optionType: string): string => {
    const optionTypeName = getOptionTypeName(optionType)
    
    if (id.startsWith('D')) {
      const number = id.slice(1)
      return `${optionTypeName} ${number}`
    } else if (id.startsWith('P')) {
      const number = id.slice(1)
      return `Protein ${number}`
    } else if (id.startsWith('C')) {
      const number = id.slice(1)
      return `Cheese ${number}`
    } else if (id.startsWith('V')) {
      const number = id.slice(1)
      return `Vegetable ${number}`
    } else if (id.startsWith('S')) {
      const number = id.slice(1)
      return `Sauce ${number}`
    } else if (id.startsWith('E')) {
      const number = id.slice(1)
      return `Extra ${number}`
    } else if (id.startsWith('SE')) {
      const number = id.slice(1)
      return `Seasoning ${number}`
    } else if (id.startsWith('EG')) {
      const number = id.slice(1)
      return `Egg ${number}`
    } else if (id.startsWith('CO')) {
      const number = id.slice(1)
      return `Cookie ${number}`
    } else if (id.startsWith('O')) {
      const number = id.slice(1)
      return `Option ${number}`
    } else if (id.match(/^\d+$/)) {
      // Pure numeric IDs
      return `${optionTypeName} ${id}`
    } else {
      // Any other format
      return `${optionTypeName} ${id}`
    }
  }

  // Calculate total price including customizations
  const calculateTotalPrice = (options: Record<string, string[]>) => {
    let total = build?.Price || 0
    
    if (build?.Options) {
      Object.entries(options).forEach(([optionType, selectedIds]) => {
        const optionGroup = build.Options?.[optionType]
        if (optionGroup && typeof optionGroup === 'object' && optionGroup.Options) {
          selectedIds.forEach(optionId => {
            const option = optionGroup.Options.find(opt => opt.Id === optionId)
            if (option && option.Price > 0) {
              total += option.Price
            }
          })
        }
      })
    }
    
    return total
  }

  useEffect(() => {
    if (build) {
      // Initialize default selections
      const defaults: Record<string, string[]> = {}
      if (build.Options) {
        console.log('Build options structure:', build.Options)
        Object.entries(build.Options).forEach(([optionType, optionGroup]) => {
          console.log(`Option type ${optionType}:`, optionGroup)
          if (optionGroup && typeof optionGroup === 'object' && optionGroup.Options) {
            const defaultOptions = optionGroup.Options.filter(opt => opt && opt.IsDefault)
            defaults[optionType] = defaultOptions.map(opt => opt.Id)
            
            // Log any unmapped customization IDs for future reference
            optionGroup.Options.forEach(opt => {
              if (opt && opt.Id && !CUSTOMIZATION_NAMES[opt.Id]) {
                console.log(`Unmapped customization ID: ${opt.Id} in category ${optionType}`)
              }
            })
          }
        })
        setSelectedOptions(defaults)
        setTotalPrice(calculateTotalPrice(defaults))
      }
    }
  }, [build])

  const handleOptionChange = (optionType: string, optionId: string, checked: boolean) => {
    setSelectedOptions(prev => {
      const current = prev[optionType] || []
      let newSelection: string[]
      
      if (checked) {
        newSelection = [...current, optionId]
      } else {
        newSelection = current.filter(id => id !== optionId)
      }
      
      // Only enforce maximum quantities, not minimum
      if (build?.Options?.[optionType]) {
        const optionGroup = build.Options[optionType]
        if (optionGroup && typeof optionGroup === 'object') {
          const { MaximumQuantity = 999 } = optionGroup
          
          if (MaximumQuantity > 0 && newSelection.length > MaximumQuantity) {
            newSelection = newSelection.slice(0, MaximumQuantity) // Limit to maximum
          }
        }
      }
      
      const newOptions = { ...prev, [optionType]: newSelection }
      
      // Update total price when options change
      setTotalPrice(calculateTotalPrice(newOptions))
      
      return newOptions
    })
  }

  const handleAddToCart = () => {
    if (product && build) {
      // Validate that required options are selected
      let isValid = true
      let errorMessage = ''
      
      if (build.Options) {
        Object.entries(build.Options).forEach(([optionType, optionGroup]) => {
          if (optionGroup && typeof optionGroup === 'object' && optionGroup.Options) {
            const selected = selectedOptions[optionType] || []
            const { MinimumQuantity = 0 } = optionGroup
            
            if (optionType === 'Bread' && selected.length < MinimumQuantity) {
              isValid = false
              errorMessage = `${getOptionTypeName(optionType)} requires at least ${MinimumQuantity} selection(s)`
            }
          }
        })
      }
      
      if (!isValid) {
        alert(errorMessage)
        return
      }
      
      const allCustomizations = Object.values(selectedOptions).flat()
      onAddToCart(product, build, allCustomizations)
      onClose()
    }
  }

  if (!isOpen || !product || !build) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        style={{ 
          maxWidth: '800px', 
          width: '95%',
          padding: '2.5rem',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
                 {/* Header with close button */}
         <div style={{ 
           display: 'flex', 
           justifyContent: 'space-between', 
           alignItems: 'flex-start', 
           marginBottom: '2rem',
           borderBottom: '2px solid var(--gray-200)',
           paddingBottom: '1rem'
         }}>
           <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
             {/* Product Image */}
             <div style={{
               width: '120px',
               height: '120px',
               borderRadius: '12px',
               overflow: 'hidden',
               border: '2px solid var(--gray-200)',
               flexShrink: 0
             }}>
               <img 
                 src={getImageUrl(product.ImageUrl)} 
                 alt={product.Name}
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover'
                 }}
                 onError={(e) => {
                   const target = e.currentTarget as HTMLImageElement
                   target.style.display = 'none'
                   const fallback = target.nextElementSibling as HTMLDivElement
                   if (fallback) fallback.style.display = 'flex'
                 }}
               />
               <div 
                 style={{ 
                   width: '100%',
                   height: '100%',
                   fontSize: '3rem', 
                   textAlign: 'center', 
                   display: 'none',
                   alignItems: 'center',
                   justifyContent: 'center',
                   backgroundColor: 'var(--gray-100)',
                   color: 'var(--gray-400)'
                 }}
               >
                 🥪
               </div>
             </div>
             
             {/* Product Info */}
             <div>
               <h3 style={{ 
                 fontSize: '1.8rem', 
                 margin: '0 0 0.5rem 0',
                 color: 'var(--gray-800)',
                 fontWeight: '700'
               }}>
                 {product.Name}
               </h3>
               <div style={{ 
                 fontSize: '1.1rem', 
                 fontWeight: '600',
                 backgroundColor: 'var(--brand-1)',
                 color: 'white',
                 padding: '0.25rem 0.75rem',
                 borderRadius: '20px',
                 display: 'inline-block'
               }}>
                 {build.BuildName}
               </div>
             </div>
           </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'var(--gray-100)', 
              border: 'none', 
              fontSize: '1.5rem', 
              cursor: 'pointer',
              color: 'var(--gray-600)',
              padding: '0.5rem',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gray-200)'
              e.currentTarget.style.color = 'var(--gray-800)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--gray-100)'
              e.currentTarget.style.color = 'var(--gray-600)'
            }}
          >
            ×
          </button>
        </div>

                 {/* Description and base price */}
         <div style={{ 
           marginBottom: '2rem',
           padding: '1.5rem'
         }}>
           <p style={{ 
             margin: '0 0 1rem 0', 
             fontSize: '1rem', 
             lineHeight: '1.6',
             color: 'var(--gray-700)'
           }}>
             {product.Description}
           </p>
           <div style={{ 
             fontSize: '1rem', 
             fontWeight: '500', 
             color: 'var(--gray-600)',
             padding: '0.5rem 0',
             display: 'inline-block'
           }}>
             Base Price: ${build.Price.toFixed(2)}
           </div>
         </div>
        
        {/* Customization sections */}
        {build.Options && Object.entries(build.Options).map(([optionType, optionGroup]) => {
          // Skip if optionGroup is null/undefined or doesn't have required properties
          if (!optionGroup || typeof optionGroup !== 'object' || !optionGroup.Options) {
            return null
          }
          
          return (
                         <div key={optionType} className="customization-section" style={{
               marginBottom: '2rem',
               padding: '1.5rem 0'
             }}>
              <h4 style={{
                fontSize: '1.3rem',
                margin: '0 0 1rem 0',
                color: 'var(--gray-800)',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--brand-1)',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}></span>
                {getOptionTypeName(optionType)}
              </h4>
              
              {/* Requirements */}
              {(optionGroup.MinimumQuantity > 0 || optionGroup.MaximumQuantity > 0) && (
                                 <div style={{ 
                   marginBottom: '1rem', 
                   padding: '0.75rem 0',
                   fontSize: '0.9rem', 
                   color: 'var(--gray-600)',
                   display: 'flex',
                   gap: '1rem'
                 }}>
                  {optionGroup.MinimumQuantity > 0 && (
                    <span style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <span style={{ color: 'var(--brand-1)', fontWeight: '600' }}>✓</span>
                      Min: {optionGroup.MinimumQuantity}
                    </span>
                  )}
                  {optionGroup.MaximumQuantity > 0 && (
                    <span style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      <span style={{ color: 'var(--gray-500)', fontWeight: '600' }}>⚠</span>
                      Max: {optionGroup.MaximumQuantity}
                    </span>
                  )}
                </div>
              )}
              
              {/* Options grid */}
              <div className="customization-options" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '0.75rem'
              }}>
                {Array.isArray(optionGroup.Options) && optionGroup.Options
                  .filter(option => {
                    // Basic validation only (filtering by real names already done in parent)
                    return option && typeof option === 'object' && option.Id
                  })
                  .map(option => {
                    return (
                      <label key={option.Id} className="option-item" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--gray-200)',
                        transition: 'all 0.2s ease',
                        backgroundColor: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-1)'
                        e.currentTarget.style.backgroundColor = 'var(--gray-50)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gray-200)'
                        e.currentTarget.style.backgroundColor = 'white'
                      }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions[optionType]?.includes(option.Id) || false}
                          onChange={(e) => handleOptionChange(optionType, option.Id, e.target.checked)}
                          style={{
                            width: '18px',
                            height: '18px',
                            accentColor: 'var(--brand-1)'
                          }}
                        />
                        <span className="option-name" style={{
                          flex: '1',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: 'var(--gray-800)'
                        }}>
                          {getCustomizationName(option.Id, optionType)}
                        </span>
                        {option.Price > 0 && (
                          <span className="option-price" style={{
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            backgroundColor: 'var(--brand-1)',
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '6px',
                            whiteSpace: 'nowrap'
                          }}>
                            +${option.Price.toFixed(2)}
                          </span>
                        )}
                      </label>
                    )
                  })}
              </div>
            </div>
          )
        })}
        
        {/* Footer with total and add to cart */}
                 <div className="modal-actions" style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           marginTop: '2rem',
           padding: '1.5rem 0',
           borderTop: '1px solid var(--gray-200)'
         }}>
          <div style={{ 
            fontWeight: '700', 
            fontSize: '1.4rem', 
            color: 'var(--brand-1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>Total:</span>
            <span style={{
              backgroundColor: 'var(--brand-1)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '1.2rem'
            }}>
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleAddToCart}
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              minWidth: '200px'
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function SubwayPage() {
  const router = useRouter()
  const [menuData, setMenuData] = useState<MenuData | null>(null)
  const [activeSection, setActiveSection] = useState<string>('')
  const [cart, setCart] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [autoMappingCache, setAutoMappingCache] = useState<{ [key: string]: string }>({})
  const [customizationModal, setCustomizationModal] = useState<{
    isOpen: boolean
    product: Product | null
    build: Build | null
  }>({
    isOpen: false,
    product: null,
    build: null
  })

  // Auto-discover customization mappings from menu data
  const autoDiscoverCustomizations = (data: MenuData) => {
    const discoveredMappings: { [key: string]: string } = {}
    
    // Analyze all products and builds to find patterns
    data.Data.Products.forEach(product => {
      product.Builds.forEach(build => {
        if (build.Options) {
          Object.entries(build.Options).forEach(([optionType, optionGroup]) => {
            if (optionGroup && optionGroup.Options) {
              optionGroup.Options.forEach(option => {
                const id = option.Id
                
                // Try to extract meaningful names from product descriptions
                // Smart mapping based on context and common Subway items
                if (!discoveredMappings[id]) {
                  discoveredMappings[id] = generateSmartMapping(id, optionType)
                }
              })
            }
          })
        }
      })
    })
    
    console.log('Auto-discovered customization mappings:', discoveredMappings)
    setAutoMappingCache(discoveredMappings)
    return discoveredMappings
  }

  // Generate smart mappings based on context
  const generateSmartMapping = (id: string, optionType: string): string => {
    // Common Subway menu items mapping
    const commonMappings: { [key: string]: string } = {
      // Breads
      'D129': 'Italian Herb & Cheese',
      'D131': 'Hearty Italian', 
      'D133': 'Honey Oat',
      'D134': 'White',
      'D854': 'Multigrain',
      
      // Proteins
      'D518': 'Leg Ham',
      'D306': 'Turkey Breast',
      'D317': 'Steak',
      
      // Cheeses
      'D136': 'Provolone',
      'D138': 'Swiss', 
      'D139': 'American',
      
      // Common vegetables
      'D162': 'Lettuce',
      'D163': 'Tomatoes',
      'D164': 'Red Onions',
      'D165': 'Cucumbers',
      'D166': 'Capsicum',
      'D167': 'Olives',
      'D169': 'Jalapeños',
      'D170': 'Baby Spinach',
      'D171': 'Pickles',
      'D173': 'Banana Peppers',
      
      // Sauces
      'D141': 'Mayonnaise',
      'D143': 'Seeded Mustard',
      'D144': 'Tomato Sauce',
      'D145': 'Ranch',
      'D146': 'Italian Dressing',
      'D147': 'BBQ Sauce',
      'D149': 'Chilli',
      'D151': 'Oil',
      'D153': 'Sweet Onion',
      'D154': 'Honey Mustard',
      'D156': 'Southwest',
      'D157': 'Light Mayo',
      'D174': 'Vinegar',
      'D668': 'Sriracha',
      'D1478': 'Buffalo Sauce',
      
      // Seasonings
      'D159': 'Salt',
      'D160': 'Pepper',
      
      // Extras
      '2407': 'Extra Cheese',
      '2575': 'Double Protein',
      '2588': 'Extra Sauce',
      '2590': 'Premium Toppings',
      '2594': 'Extra Bread',
      '3668': 'Gourmet Sauces'
    }
    
    if (commonMappings[id]) {
      return commonMappings[id]
    }
    
    // Generate contextual names
    const optionTypeName = optionType.replace(/s$/, '') // Remove plural
    return `${optionTypeName} ${id.replace(/^D/, '')}`
  }

     useEffect(() => {
     // Load cart from localStorage
     const savedCart = localStorage.getItem('campus-angel-cart')
     if (savedCart) {
       try {
         const parsedCart = JSON.parse(savedCart)
         setCart(parsedCart)
       } catch (error) {
         console.error('Error parsing saved cart:', error)
       }
     }
   }, [])

   useEffect(() => {
     // Load menu data from products.json
     fetch('/products.json')
       .then(response => {
         console.log('Response status:', response.status)
         return response.json()
       })
       .then((data: MenuData) => {
         console.log('Loaded menu data:', data)
         console.log('Categories:', data.Data.Categories)
         console.log('Products:', data.Data.Products)
         
         // Auto-discover customization mappings
         autoDiscoverCustomizations(data)
         
         setMenuData(data)
         // Set first category as active
         if (data.Data.Categories.length > 0) {
           setActiveSection(data.Data.Categories[0].Id)
           console.log('Set active section to:', data.Data.Categories[0].Id)
         }
         setLoading(false)
       })
       .catch(error => {
         console.error('Error loading menu data:', error)
         setLoading(false)
       })
   }, [])

  // Check if a customization option has a real name (not generated)
  const hasRealName = (id: string): boolean => {
    // Check if it's in our manual mappings (these are real names)
    if (CUSTOMIZATION_NAMES[id]) {
      return true
    }
    
    // Check if it's in the auto-discovered cache with a real name
    if (autoMappingCache[id] && !autoMappingCache[id].includes('Option') && !autoMappingCache[id].includes('#')) {
      return true
    }
    
    // Check the smart mappings from autoGrabCustomizationName
    const smartMappings = [
      'D129', 'D131', 'D133', 'D134', 'D854', // Breads
      'D136', 'D138', 'D139', // Cheese
      'D518', 'D306', 'D317', // Proteins
      'D162', 'D163', 'D164', 'D165', 'D166', 'D167', 'D169', 'D170', 'D171', 'D173', // Vegetables
      'D141', 'D143', 'D144', 'D145', 'D146', 'D147', 'D149', 'D151', 'D153', 'D154', 'D156', 'D157', 'D174', 'D668', 'D1478', // Sauces
      'D159', 'D160', // Seasonings
      '2407', '2575', '2588', '2590', '2594', '3668' // Extras
    ]
    
    return smartMappings.includes(id)
  }

  const openCustomizationModal = (product: Product, build: Build) => {
    // Filter the build options to only include items with real names
    const filteredBuild = {
      ...build,
      Options: build.Options ? Object.fromEntries(
        Object.entries(build.Options).map(([optionType, optionGroup]) => {
          if (optionGroup && optionGroup.Options) {
            return [optionType, {
              ...optionGroup,
              Options: optionGroup.Options.filter(option => hasRealName(option.Id))
            }]
          }
          return [optionType, optionGroup]
        })
      ) : undefined
    }

    setCustomizationModal({
      isOpen: true,
      product,
      build: filteredBuild
    })
  }

  const closeCustomizationModal = () => {
    setCustomizationModal({
      isOpen: false,
      product: null,
      build: null
    })
  }

  const addToCart = (product: Product, build: Build, customizations: string[] = []) => {
    // Calculate total price including customizations
    let totalPrice = build.Price
    if (build.Options && customizations.length > 0) {
      Object.entries(build.Options).forEach(([, optionGroup]) => {
        if (optionGroup && typeof optionGroup === 'object' && optionGroup.Options) {
          customizations.forEach(customizationId => {
            const option = optionGroup.Options.find(opt => opt.Id === customizationId)
            if (option && option.Price > 0) {
              totalPrice += option.Price
            }
          })
        }
      })
    }
    
    console.log('Adding to cart:', { product: product.Name, build: build.BuildName, customizations, totalPrice })
    
    setCart(prev => {
      // Create a unique key that includes customizations
      const customizationsKey = customizations.sort().join(',')
      
      // Find existing item with same product, build, AND customizations
      const existing = prev.find(item => {
        const itemCustomizationsKey = (item.customizations || []).sort().join(',')
        return item.id === product.MasterProductId && 
               item.buildId === build.Id && 
               itemCustomizationsKey === customizationsKey
      })
      
      let newCart
      if (existing) {
        // Update quantity of existing item with same customizations
        newCart = prev.map(item => {
          const itemCustomizationsKey = (item.customizations || []).sort().join(',')
          if (item.id === product.MasterProductId && 
              item.buildId === build.Id && 
              itemCustomizationsKey === customizationsKey) {
            return { ...item, quantity: item.quantity + 1, price: totalPrice }
          }
          return item
        })
      } else {
        // Add new item with different customizations
        newCart = [...prev, { 
          id: product.MasterProductId,
          buildId: build.Id,
          name: `${product.Name} - ${build.BuildName}`,
          price: totalPrice,
          quantity: 1,
          customizations
        }]
      }
      
      // Save to localStorage
      localStorage.setItem('campus-angel-cart', JSON.stringify(newCart))
      return newCart
    })
  }

  // Function to get friendly name for customization ID (for cart display)
  const getCustomizationName = (id: string): string => {
    // First try the manual mapping
    if (CUSTOMIZATION_NAMES[id]) {
      return CUSTOMIZATION_NAMES[id]
    }
    
    // Then try the auto-discovered mapping cache
    if (autoMappingCache[id]) {
      return autoMappingCache[id]
    }
    
    // Fallback to readable ID format
    if (id.startsWith('D')) {
      return `Option ${id.slice(1)}`
    } else if (id.startsWith('P')) {
      return `Protein ${id.slice(1)}`
    } else if (id.startsWith('C')) {
      return `Cheese ${id.slice(1)}`
    } else if (id.startsWith('V')) {
      return `Vegetable ${id.slice(1)}`
    } else if (id.startsWith('S')) {
      return `Sauce ${id.slice(1)}`
    } else if (id.startsWith('E')) {
      return `Extra ${id.slice(1)}`
    } else {
      return `Customization ${id}`
    }
  }

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return '🥪'
    // Add subway.com prefix to image URLs
    return `https://subway.com${imagePath}`
  }

  const updateQuantity = (itemKey: string, change: number) => {
    setCart(prev => {
      const item = prev.find(item => {
        const customizationsKey = (item.customizations || []).sort().join(',')
        return `${item.id}-${item.buildId}-${customizationsKey}` === itemKey
      })
      if (!item) return prev
      
      const newQuantity = item.quantity + change
      let newCart
      
      if (newQuantity <= 0) {
        newCart = prev.filter(item => {
          const customizationsKey = (item.customizations || []).sort().join(',')
          return `${item.id}-${item.buildId}-${customizationsKey}` !== itemKey
        })
      } else {
        newCart = prev.map(item => {
          const customizationsKey = (item.customizations || []).sort().join(',')
          return `${item.id}-${item.buildId}-${customizationsKey}` === itemKey
            ? { ...item, quantity: newQuantity }
            : item
        })
      }
      
      // Save to localStorage
      localStorage.setItem('campus-angel-cart', JSON.stringify(newCart))
      return newCart
    })
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = subtotal > 0 ? 2.99 : 0
  const total = subtotal + deliveryFee

  if (loading) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: 80, padding: '2rem', textAlign: 'center' }}>
          <div>Loading menu...</div>
        </main>
      </>
    )
  }

  if (!menuData) {
    return (
      <>
        <Navbar />
        <main style={{ marginTop: 80, padding: '2rem', textAlign: 'center' }}>
          <div>Error loading menu data</div>
        </main>
      </>
    )
  }

  const { Categories, Products } = menuData.Data
  
  // Debug logging
  console.log('Current Categories:', Categories)
  console.log('Current Products:', Products)
  console.log('Active Section:', activeSection)
  
  // Debug: Check first few products and their category structure
  console.log('First 3 products:', Products.slice(0, 3))
  console.log('First 3 categories:', Categories.slice(0, 3))
  
  // Filter products for current category
  const currentProducts = Products.filter(product => 
    product.Categories.some(cat => 
      typeof cat === 'string' ? cat === activeSection : cat.Id === activeSection
    )
  )
  console.log('Products for current category:', currentProducts)
  
  // Debug: Check what categories each product has
  Products.slice(0, 5).forEach(product => {
    console.log(`Product "${product.Name}" has categories:`, product.Categories)
  })

  return (
    <>
      <Navbar />
      <main style={{ marginTop: 0 }}>
                 {/* Restaurant Header */}
         <div className="restaurant-header" style={{ marginTop: '80px' }}>
           <div className="container">
             <div className="restaurant-info">
               <h1>🥪 Subway</h1>
               <p>Fresh sandwiches made to order with premium ingredients</p>
               <div className="restaurant-meta">
                 <span>⭐ 4.5 Rating</span>
                 <span>🕒 8-15 min delivery</span>
                 <span>💰 Free delivery</span>
               </div>
             </div>
           </div>
         </div>

        {/* Full width content - no container constraint */}
        <div className="menu-layout">
          <div className="menu-nav">
            {Categories.map(category => (
              <button
                key={category.Id}
                className={`nav-item ${activeSection === category.Id ? 'active' : ''}`}
                onClick={() => setActiveSection(category.Id)}
              >
                {category.Name}
              </button>
            ))}
          </div>

          <div className="menu-content">
            <div className="category-section">
              <h2>{Categories.find(c => c.Id === activeSection)?.Name}</h2>
              <div className="menu-grid">
                {Products
                  .filter(product => product.Categories.some(cat => 
                    typeof cat === 'string' ? cat === activeSection : cat.Id === activeSection
                  ))
                  .map(product => (
                    <div key={product.MasterProductId} className="menu-item">
                      <div className="item-image">
                        <img 
                          src={getImageUrl(product.ImageUrl)} 
                          alt={product.Name}
                          onError={(e) => {
                            // Fallback to emoji if image fails to load
                            const target = e.currentTarget as HTMLImageElement
                            target.style.display = 'none'
                            const fallback = target.nextElementSibling as HTMLDivElement
                            if (fallback) fallback.style.display = 'block'
                          }}
                        />
                        <div 
                          style={{ 
                            fontSize: '4rem', 
                            textAlign: 'center', 
                            padding: '2rem',
                            display: 'none'
                          }}
                        >
                          🥪
                        </div>
                      </div>
                      <div className="item-info">
                        <h3>{product.Name}</h3>
                        <p>{product.Description}</p>
                        <div className="item-price">
                          From ${Math.min(...product.Builds.map(b => b.Price)).toFixed(2)}
                        </div>
                        {product.Builds.map(build => (
                          <button
                            key={build.Id}
                            className="btn btn-primary"
                            onClick={() => openCustomizationModal(product, build)}
                            style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
                          >
                            {build.BuildName} - ${build.Price.toFixed(2)}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="cart-sidebar">
            <h3>🛒 Your Order</h3>
            {cart.length === 0 ? (
              <div className="empty-cart">Your cart is empty</div>
            ) : (
              <>
                                 <div className="cart-items">
                   {cart.map(item => {
                     const customizationsKey = (item.customizations || []).sort().join(',')
                     const itemKey = `${item.id}-${item.buildId}-${customizationsKey}`
                     return (
                       <div key={itemKey} className="cart-item">
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <div className="customizations">
                          {item.customizations && item.customizations.length > 0 && (
                            <span>
                              Customizations: {item.customizations
                                .filter(id => hasRealName(id))
                                .map(id => getCustomizationName(id))
                                .join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                                             <div className="item-actions">
                         <div className="quantity-controls">
                           <button onClick={() => updateQuantity(itemKey, -1)}>-</button>
                           <span>{item.quantity}</span>
                           <button onClick={() => updateQuantity(itemKey, 1)}>+</button>
                         </div>
                         <button 
                           className="remove-btn"
                           onClick={() => updateQuantity(itemKey, -item.quantity)}
                         >
                           Remove
                         </button>
                       </div>
                    </div>
                   )
                   })}
                </div>
                <div className="cart-total">
                  <div className="total-line total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary checkout-btn"
                  onClick={() => router.push('/checkout')}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Customization Modal */}
        <CustomizationModal
          isOpen={customizationModal.isOpen}
          onClose={closeCustomizationModal}
          product={customizationModal.product}
          build={customizationModal.build}
          onAddToCart={addToCart}
        />
      </main>
    </>
  )
}


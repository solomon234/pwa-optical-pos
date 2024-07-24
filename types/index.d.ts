import type { Avatar } from '#ui/types'

export type UserStatus = 'active' | 'inactive' | 'pending'
// Patient export interface
export interface Patient {
  id: number
  firstName: string
  lastName: string
  dateOfBirth: Date
  address: Address
  phone: string
  email: string
  emergencyContact: EmergencyContact | null
  insuranceProvider: InsuranceProvider | null
  visionHistory: VisionHistory[] | null
  appointments: Appointment[] | null
  orders: Order[] | null
  payments: Payment[] | null
  avatar?: Avatar
  status: UserStatus | null
}

// Address export interface
export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// Emergency Contact export interface
export interface EmergencyContact {
  name: string
  relationship: string
  phone: string
}

// Insurance Provider export interface
export interface InsuranceProvider {
  name: string
  policyNumber: string
  coverageDetails: string
}

// Vision History export interface
export interface VisionHistory {
  id: number
  date: Date
  visualAcuity: VisualAcuity
  refraction: Refraction
  prescription: Prescription
  notes: string
}

// Visual Acuity export interface
export interface VisualAcuity {
  rightEye: number
  leftEye: number
}

// Refraction export interface
export interface Refraction {
  rightEye: {
    sphere: number
    cylinder: number
    axis: number
    prism: number
  }
  leftEye: {
    sphere: number
    cylinder: number
    axis: number
    prism: number
  }
}

// Prescription export interface
export interface Prescription {
  id: number
  expirationDate: Date
  eyeglassPrescription: Refraction
  contactLensPrescription?: Refraction
}

// Appointment export interface
export interface Appointment {
  id: number
  date: Date
  reason: string
  notes: string
}

// Order export interface
export interface Order {
  id: number
  date: Date
  frames: Frame[]
  lenses: Lens[]
  contacts: ContactLens[]
  otherProducts: Product[]
  total: number
  warranty: Warranty
}

// Frame export interface
export interface Frame {
  id: number
  brand: string
  model: string
  color: string
  size: string
  price: number
}

// Lens export interface
export interface Lens {
  id: number
  type: string
  coatings: string[]
  material: string
  price: number
}

// Contact Lens export interface
export interface ContactLens {
  id: number
  brand: string
  type: string
  power: Refraction
  quantity: number
  price: number
}

// Product export interface
export interface Product {
  id: number
  name: string
  description: string
  price: number
}

// Warranty export interface
export interface Warranty {
  id: number
  duration: number // in months
  coverageDetails: string
}

// Payment export interface
export interface Payment {
  id: number
  orderid: number
  date: Date
  amount: number
  method: string // e.g., 'credit card', 'insurance', 'cash'
  details: string // e.g., credit card number, insurance claim details
}

export interface Mail {
  id: number
  unread?: boolean
  from: User
  subject: string
  body: string
  date: string
}

export interface Member {
  name: string
  username: string
  role: 'member' | 'owner'
  avatar: Avatar
}

export interface Notification {
  id: number
  unread?: boolean
  sender: User
  body: string
  date: string
}

export type Period = 'daily' | 'weekly' | 'monthly'

export interface Range {
  start: Date
  end: Date
}

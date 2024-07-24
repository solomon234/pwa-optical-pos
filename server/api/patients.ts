import type { Patient, UserStatus } from '~/types'

const patients: Patient[] = [{
  id: 1,
  firstName: 'Alex',
  lastName: 'Smith',
  email: 'alex.smith@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=1'
  },
  status: 'inactive',
  dateOfBirth: new Date('1990-01-01'),
  phone: '123-123-1234',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'USA'
  },
  emergencyContact: {
    name: 'John Smith',
    phone: '123-456-7890',
    relationship: 'Brother'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 2,
  firstName: 'Jordan',
  lastName: 'Brown',
  email: 'jordan.brown@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=2'
  },
  status: 'active',
  dateOfBirth: new Date('1985-05-12'),
  phone: '123-123-1234',
  address: {
    street: '456 Elm St',
    city: 'Sometown',
    state: 'TX',
    zipCode: '67890',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Emily Brown',
    phone: '321-654-0987',
    relationship: 'Spouse'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 3,
  firstName: 'Taylor',
  lastName: 'Green',
  email: 'taylor.green@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=3'
  },
  status: 'active',
  dateOfBirth: new Date('1978-09-23'),
  phone: '123-123-1234',
  address: {
    street: '789 Oak St',
    city: 'Anycity',
    state: 'NY',
    zipCode: '10101',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Sam Green',
    phone: '987-654-3210',
    relationship: 'Parent'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 4,
  firstName: 'Morgan',
  lastName: 'White',
  email: 'morgan.white@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=4'
  },
  status: 'active',
  dateOfBirth: new Date('1982-11-05'),
  phone: '123-123-1234',
  address: {
    street: '101 Maple St',
    city: 'Cityville',
    state: 'FL',
    zipCode: '20202',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Jamie White',
    phone: '456-789-1230',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 5,
  firstName: 'Casey',
  lastName: 'Gray',
  email: 'casey.gray@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=5'
  },
  status: 'active',
  dateOfBirth: new Date('1995-07-17'),
  phone: '123-123-1234',
  address: {
    street: '102 Pine St',
    city: 'Village',
    state: 'OH',
    zipCode: '30303',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Alex Gray',
    phone: '654-321-0987',
    relationship: 'Partner'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 6,
  firstName: 'Jamie',
  lastName: 'Johnson',
  email: 'jamie.johnson@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=6'
  },
  status: 'active',
  dateOfBirth: new Date('1988-03-03'),
  phone: '123-123-1234',
  address: {
    street: '103 Cedar St',
    city: 'Townsville',
    state: 'MI',
    zipCode: '40404',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Taylor Johnson',
    phone: '321-987-6540',
    relationship: 'Friend'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 7,
  firstName: 'Riley',
  lastName: 'Davis',
  email: 'riley.davis@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=7'
  },
  status: 'active',
  dateOfBirth: new Date('1977-12-12'),
  phone: '123-123-1234',
  address: {
    street: '104 Birch St',
    city: 'Metrocity',
    state: 'IL',
    zipCode: '50505',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Casey Davis',
    phone: '123-456-7891',
    relationship: 'Spouse'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 8,
  firstName: 'Kelly',
  lastName: 'Wilson',
  email: 'kelly.wilson@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=8'
  },
  status: 'active',
  dateOfBirth: new Date('1989-04-14'),
  phone: '123-123-1234',
  address: {
    street: '105 Oak St',
    city: 'Capital City',
    state: 'CA',
    zipCode: '60606',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Riley Wilson',
    phone: '321-654-9870',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 9,
  firstName: 'Drew',
  lastName: 'Moore',
  email: 'drew.moore@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=9'
  },
  status: 'active',
  dateOfBirth: new Date('1975-06-06'),
  phone: '123-123-1234',
  address: {
    street: '106 Maple St',
    city: 'Suburbia',
    state: 'NJ',
    zipCode: '70707',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Taylor Moore',
    phone: '654-321-8765',
    relationship: 'Partner'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 10,
  firstName: 'Jordan',
  lastName: 'Taylor',
  email: 'jordan.taylor@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=10'
  },
  status: 'active',
  dateOfBirth: new Date('1992-08-08'),
  phone: '123-123-1234',
  address: {
    street: '107 Pine St',
    city: 'Uptown',
    state: 'MA',
    zipCode: '80808',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Alex Taylor',
    phone: '987-654-3210',
    relationship: 'Friend'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 11,
  firstName: 'Morgan',
  lastName: 'Anderson',
  email: 'morgan.anderson@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=11'
  },
  status: 'active',
  dateOfBirth: new Date('1983-10-10'),
  phone: '123-123-1234',
  address: {
    street: '108 Cedar St',
    city: 'Downtown',
    state: 'VA',
    zipCode: '90909',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Jamie Anderson',
    phone: '321-654-9870',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 12,
  firstName: 'Casey',
  lastName: 'Thomas',
  email: 'casey.thomas@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=12'
  },
  status: 'active',
  dateOfBirth: new Date('1980-02-02'),
  phone: '123-123-1234',
  address: {
    street: '109 Birch St',
    city: 'Cityville',
    state: 'PA',
    zipCode: '10101',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Morgan Thomas',
    phone: '456-789-1230',
    relationship: 'Spouse'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 13,
  firstName: 'Jamie',
  lastName: 'Jackson',
  email: 'jamie.jackson@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=13'
  },
  status: 'active',
  dateOfBirth: new Date('1994-09-09'),
  phone: '123-123-1234',
  address: {
    street: '110 Oak St',
    city: 'Metrocity',
    state: 'TX',
    zipCode: '20202',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Jordan Jackson',
    phone: '654-321-0987',
    relationship: 'Friend'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 14,
  firstName: 'Riley',
  lastName: 'White',
  email: 'riley.white@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=14'
  },
  status: 'active',
  dateOfBirth: new Date('1986-04-04'),
  phone: '123-123-1234',
  address: {
    street: '111 Pine St',
    city: 'Townsville',
    state: 'OH',
    zipCode: '30303',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Kelly White',
    phone: '321-987-6540',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 15,
  firstName: 'Kelly',
  lastName: 'Harris',
  email: 'kelly.harris@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=15'
  },
  status: 'active',
  dateOfBirth: new Date('1990-01-01'),
  phone: '123-123-1234',
  address: {
    street: '112 Cedar St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Drew Harris',
    phone: '123-456-7890',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 16,
  firstName: 'Drew',
  lastName: 'Martin',
  email: 'drew.martin@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=16'
  },
  status: 'active',
  dateOfBirth: new Date('1985-05-12'),
  phone: '123-123-1234',
  address: {
    street: '113 Birch St',
    city: 'Sometown',
    state: 'TX',
    zipCode: '67890',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Jordan Martin',
    phone: '321-654-0987',
    relationship: 'Spouse'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 17,
  firstName: 'Alex',
  lastName: 'Thompson',
  email: 'alex.thompson@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=17'
  },
  status: 'active',
  dateOfBirth: new Date('1978-09-23'),
  phone: '123-123-1234',
  address: {
    street: '114 Oak St',
    city: 'Anycity',
    state: 'NY',
    zipCode: '10101',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Taylor Thompson',
    phone: '987-654-3210',
    relationship: 'Parent'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 18,
  firstName: 'Jordan',
  lastName: 'Garcia',
  email: 'jordan.garcia@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=18'
  },
  status: 'active',
  dateOfBirth: new Date('1982-11-05'),
  phone: '123-123-1234',
  address: {
    street: '115 Cedar St',
    city: 'Cityville',
    state: 'FL',
    zipCode: '20202',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Jamie Garcia',
    phone: '456-789-1230',
    relationship: 'Sibling'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 19,
  firstName: 'Taylor',
  lastName: 'Rodriguez',
  email: 'taylor.rodriguez@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=19'
  },
  status: 'inactive',
  dateOfBirth: new Date('1995-07-17'),
  phone: '123-123-1234',
  address: {
    street: '116 Birch St',
    city: 'Village',
    state: 'OH',
    zipCode: '30303',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Alex Rodriguez',
    phone: '654-321-0987',
    relationship: 'Partner'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}, {
  id: 20,
  firstName: 'Morgan',
  lastName: 'Lopez',
  email: 'morgan.lopez@example.com',
  avatar: {
    src: 'https://i.pravatar.cc/128?u=20'
  },
  status: 'active',
  dateOfBirth: new Date('1988-03-03'),
  phone: '123-123-1234',
  address: {
    street: '117 Oak St',
    city: 'Townsville',
    state: 'MI',
    zipCode: '40404',
    country: 'USA'
  },
  emergencyContact: {
    name: 'Taylor Lopez',
    phone: '321-987-6540',
    relationship: 'Friend'
  },
  insuranceProvider: null,
  visionHistory: [],
  orders: [],
  appointments: [],
  payments: []
}]

export default eventHandler(async (event) => {
  const { q, statuses, locations, sort, order } = getQuery(event) as { q?: string, statuses?: UserStatus[], locations?: string[], sort?: 'name' | 'email', order?: 'asc' | 'desc' }

  await new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })

  return patients.filter((patient) => {
    if (!q) return true

    return patient.firstName.search(new RegExp(q, 'i')) !== -1 || patient.email.search(new RegExp(q, 'i')) !== -1
  }).filter((patient) => {
    if (!statuses?.length) return true

    return statuses.includes(patient.status)
  }).filter((patient) => {
    if (!locations?.length) return true

    return locations.includes(patient.address.city + ' ,' + patient.address.state)
  }).sort((a, b) => {
    if (!sort) return 0

    const aValue = a[sort]
    const bValue = b[sort]

    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
})

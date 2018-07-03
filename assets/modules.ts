export interface Prescription {
    prescriptionId: string,
    prescriptionName: string,
    prescriptionImage: string,
    prescriptionImageUrl: string
}
export interface Quote {
    quoteId: string,
    quoteName: string,
    quoteImage: string,
    quoteImageUrl: string,
    quotePrice: number,
    quoteDiscount: number,
    quoteTotal: number,
}
export interface Patient {
    patientId: string,
    patientName: string,
    patientAge: string,
    patientMob: string,
    patientGender: string
}
export interface Contact {
    contactId: string,
    phoneNumber: string,
    contactName: string,
    contactAge: string,
    contactGender: string,
    contactEmail: string,
    contactStatus: string,
    patient: [Patient]
}

export interface Order {
    id: string,
    orderNumber: string,
    orderDate: string,
    contact: Contact,
    prescriptions: [Prescription],
    orderPreference: string,
    deliveryAddress: {
        address: string,
        area: string,
        city: string,
        pincode: string
    }
    orderNotes: string,
    quotes: [Quote],
    orderDeliveryCharge: number,
    orderTotal: number,
    orderStatus: string,
    estimatedDeliveryTime: string,
    shopId: string
}

export interface Doctor {
    doctorId: string,
    doctorName: string,
    doctorQualification: string,
    phoneNumber: string,
    department: string,
    availableTimings: Array<string>
}

export interface Appointment {
    id: string,
    appointmentDate: string,
    contact: [Contact],
    symptons: Array<string>,
    doctor: Doctor,
    appointmentNotes:string,
    appointmentStatus: string,
}

export interface Drug {
    drugId: string,
    drugName: string,
    drugCount: number,
    dailyDosage: number,
    noOfDays: number,
    noOfTimesaDay: number,
    whenToTake: string
}

export interface Prescription {
    id: string,
    prescriptionDate: string,
    appointment: Appointment,
    drug: [Drug]
}


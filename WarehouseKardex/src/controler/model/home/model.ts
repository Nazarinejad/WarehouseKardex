export interface IWarehouseInqueryByPostalCode {
    postalCode: string
    size: number
    start: number
}

export interface IDataResult {
    Id?:string 
    Name?: string
    Mobile?:string 
    PhoneNumber?:string 
    PostalCode?:string
    Province?:string
    City?:string
    Area?:string
    AreaType?:string
    CeoName?:string
    CeoNationalId?:string
    Township?:string
    ConfirmDate?:string
    ConfirmUserNationalId?:string
    ContractorExpireDate?:string
    ContractorName?:string
    ContractorNationalId?:string
    GovWarehouseNo?:string
    ModifyDate?:string
    DeleteReason?:string
    DeleteDescription?:string
    DeleterNationalId?:string




    RegisterNumber?: string
    RegisterDate?: string
    RegisterUnit?: string // واحد ثبت اصلی؟؟؟
    //واحد ثبت فرعی

    LegalPersonType?: string
    Residency?: string //اقامت
    Address?: string
    PostCode?: string
    BreakUpDate?: string //انحلال
    EstablishmentDate?: string //تاسیس
    // "BankRuptcyDate": "",
    // "FollowUpNo": "864190467",
    // "LastChangeDate": "1396/09/13", //تغییر اقامتگاه
    // "LicenseDate": "",
    // "LicenseNumber": "",
    NationalCode?: string
    // "ReviewTypeTitle": null
    SettleDate?: string //تسویه
    // "TaxRestrictDate": "",
    // "UnitId": "872CB9BF82641DA7DF539BC670CA44FD"
}
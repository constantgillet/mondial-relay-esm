import { z } from 'zod';
export declare const PersonSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    City: z.ZodString;
    Email: z.ZodString;
    HouseNo: z.ZodString;
    PhoneNo: z.ZodString;
    MobileNo: z.ZodString;
    Lastname: z.ZodString;
    Firstname: z.ZodString;
    PostCode: z.ZodString;
    Streetname: z.ZodString;
    CountryCode: z.ZodString;
    Title: z.ZodOptional<z.ZodEnum<["Mr", "Mme"]>>;
}, "strip", z.ZodTypeAny, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}>, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}>, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}, {
    City: string;
    Email: string;
    HouseNo: string;
    PhoneNo: string;
    MobileNo: string;
    Lastname: string;
    Firstname: string;
    PostCode: string;
    Streetname: string;
    CountryCode: string;
    Title?: "Mr" | "Mme" | undefined;
}>;
export declare const ShipContextSchema: z.ZodObject<{
    Login: z.ZodString;
    Password: z.ZodString;
    VersionAPI: z.ZodOptional<z.ZodString>;
    Culture: z.ZodOptional<z.ZodString>;
    CustomerId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Login: string;
    Password: string;
    CustomerId: string;
    VersionAPI?: string | undefined;
    Culture?: string | undefined;
}, {
    Login: string;
    Password: string;
    CustomerId: string;
    VersionAPI?: string | undefined;
    Culture?: string | undefined;
}>;
export declare const ShipOutputOptionsSchema: z.ZodOptional<z.ZodObject<{
    OutputFormat: z.ZodEnum<["10x15", "A4", "A5"]>;
    OutputType: z.ZodEnum<["ZplCode", "PdfUrl", "IplCode"]>;
}, "strip", z.ZodTypeAny, {
    OutputFormat: "10x15" | "A4" | "A5";
    OutputType: "ZplCode" | "PdfUrl" | "IplCode";
}, {
    OutputFormat: "10x15" | "A4" | "A5";
    OutputType: "ZplCode" | "PdfUrl" | "IplCode";
}>>;
export declare const ShipmentSchema: z.ZodObject<{
    Sender: z.ZodEffects<z.ZodEffects<z.ZodObject<{
        City: z.ZodString;
        Email: z.ZodString;
        HouseNo: z.ZodString;
        PhoneNo: z.ZodString;
        MobileNo: z.ZodString;
        Lastname: z.ZodString;
        Firstname: z.ZodString;
        PostCode: z.ZodString;
        Streetname: z.ZodString;
        CountryCode: z.ZodString;
        Title: z.ZodOptional<z.ZodEnum<["Mr", "Mme"]>>;
    }, "strip", z.ZodTypeAny, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>;
    Recipient: z.ZodEffects<z.ZodEffects<z.ZodObject<{
        City: z.ZodString;
        Email: z.ZodString;
        HouseNo: z.ZodString;
        PhoneNo: z.ZodString;
        MobileNo: z.ZodString;
        Lastname: z.ZodString;
        Firstname: z.ZodString;
        PostCode: z.ZodString;
        Streetname: z.ZodString;
        CountryCode: z.ZodString;
        Title: z.ZodOptional<z.ZodEnum<["Mr", "Mme"]>>;
    }, "strip", z.ZodTypeAny, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }, {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    }>;
    OrderNo: z.ZodString;
    CustomerNo: z.ZodString;
    ParcelCount: z.ZodString;
    DeliveryInstruction: z.ZodOptional<z.ZodString>;
    ShipmentValue: z.ZodOptional<z.ZodObject<{
        currency: z.ZodLiteral<"EUR">;
        amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currency: "EUR";
        amount: string;
    }, {
        currency: "EUR";
        amount: string;
    }>>;
    Options: z.ZodOptional<z.ZodObject<{
        Option: z.ZodObject<{
            Key: z.ZodString;
            Value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            Value: string;
            Key: string;
        }, {
            Value: string;
            Key: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Option: {
            Value: string;
            Key: string;
        };
    }, {
        Option: {
            Value: string;
            Key: string;
        };
    }>>;
    CollectionMode: z.ZodObject<{
        Mode: z.ZodEnum<["CCC", "REL"]>;
        location: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Mode: "CCC" | "REL";
        location?: string | undefined;
    }, {
        Mode: "CCC" | "REL";
        location?: string | undefined;
    }>;
    DeliveryMode: z.ZodObject<{
        Mode: z.ZodEnum<["LCC", "HOM", "24R", "24L", "XOH"]>;
        location: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Mode: "LCC" | "HOM" | "24R" | "24L" | "XOH";
        location?: string | undefined;
    }, {
        Mode: "LCC" | "HOM" | "24R" | "24L" | "XOH";
        location?: string | undefined;
    }>;
    Parcels: z.ZodObject<{
        Parcel: z.ZodObject<{
            Content: z.ZodString;
            Weight: z.ZodObject<{
                Value: z.ZodNumber;
                Unit: z.ZodLiteral<"gr">;
            }, "strip", z.ZodTypeAny, {
                Value: number;
                Unit: "gr";
            }, {
                Value: number;
                Unit: "gr";
            }>;
            Length: z.ZodOptional<z.ZodObject<{
                Value: z.ZodNumber;
                Unit: z.ZodLiteral<"cm">;
            }, "strip", z.ZodTypeAny, {
                Value: number;
                Unit: "cm";
            }, {
                Value: number;
                Unit: "cm";
            }>>;
            Width: z.ZodOptional<z.ZodObject<{
                Value: z.ZodNumber;
                Unit: z.ZodLiteral<"cm">;
            }, "strip", z.ZodTypeAny, {
                Value: number;
                Unit: "cm";
            }, {
                Value: number;
                Unit: "cm";
            }>>;
            Depth: z.ZodOptional<z.ZodObject<{
                Value: z.ZodNumber;
                Unit: z.ZodLiteral<"cm">;
            }, "strip", z.ZodTypeAny, {
                Value: number;
                Unit: "cm";
            }, {
                Value: number;
                Unit: "cm";
            }>>;
        }, "strip", z.ZodTypeAny, {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        }, {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        Parcel: {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        };
    }, {
        Parcel: {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    Sender: {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    };
    Recipient: {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    };
    OrderNo: string;
    CustomerNo: string;
    ParcelCount: string;
    CollectionMode: {
        Mode: "CCC" | "REL";
        location?: string | undefined;
    };
    DeliveryMode: {
        Mode: "LCC" | "HOM" | "24R" | "24L" | "XOH";
        location?: string | undefined;
    };
    Parcels: {
        Parcel: {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        };
    };
    DeliveryInstruction?: string | undefined;
    ShipmentValue?: {
        currency: "EUR";
        amount: string;
    } | undefined;
    Options?: {
        Option: {
            Value: string;
            Key: string;
        };
    } | undefined;
}, {
    Sender: {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    };
    Recipient: {
        City: string;
        Email: string;
        HouseNo: string;
        PhoneNo: string;
        MobileNo: string;
        Lastname: string;
        Firstname: string;
        PostCode: string;
        Streetname: string;
        CountryCode: string;
        Title?: "Mr" | "Mme" | undefined;
    };
    OrderNo: string;
    CustomerNo: string;
    ParcelCount: string;
    CollectionMode: {
        Mode: "CCC" | "REL";
        location?: string | undefined;
    };
    DeliveryMode: {
        Mode: "LCC" | "HOM" | "24R" | "24L" | "XOH";
        location?: string | undefined;
    };
    Parcels: {
        Parcel: {
            Content: string;
            Weight: {
                Value: number;
                Unit: "gr";
            };
            Length?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Width?: {
                Value: number;
                Unit: "cm";
            } | undefined;
            Depth?: {
                Value: number;
                Unit: "cm";
            } | undefined;
        };
    };
    DeliveryInstruction?: string | undefined;
    ShipmentValue?: {
        currency: "EUR";
        amount: string;
    } | undefined;
    Options?: {
        Option: {
            Value: string;
            Key: string;
        };
    } | undefined;
}>;

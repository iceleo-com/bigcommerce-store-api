import RequestService from '../helpers/request/request-service';
import * as ShippingV2ApiSpecs from '../generated/shipping-v2';

export default class ShippingV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Shipping Zones
     *
     * Returns a list of all *Shipping Zones*.
     */
    getShippingZones(
    ) {
        return this.request.get<ShippingV2ApiSpecs.GetShippingZonesResponse, any>({
            path: 'v2/shipping/zones',
        });
    }

    /**
     * Create a Shipping Zone
     *
     * Creates a *Shipping Zone*.
     */
    createShippingZones(
        requestBody: ShippingV2ApiSpecs.CreateShippingZonesData['body'],
    ) {
        return this.request.post<any, any>({
            path: 'v2/shipping/zones',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Shipping Zone
     *
     * Returns a single *Shipping Zone*.
     */
    getShippingZone(
        id: ShippingV2ApiSpecs.GetShippingZoneData['path']['id'],
    ) {
        return this.request.get<ShippingV2ApiSpecs.GetShippingZoneResponse, any>({
            path: `v2/shipping/zones/${id}`,
        });
    }

    /**
     * Update a Shipping Zone
     *
     * Updates a *Shipping Zone*.

     **Required Fields**
     * name

     **Read Only Fields**
     * id
     */
    updateShippingZone(
        id: ShippingV2ApiSpecs.UpdateShippingZoneData['path']['id'],
        requestBody: ShippingV2ApiSpecs.UpdateShippingZoneData['body'],
    ) {
        return this.request.put<ShippingV2ApiSpecs.UpdateShippingZoneResponse, any>({
            path: `v2/shipping/zones/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Shipping Zone
     *
     * Deletes a *Shipping Zone*.
     */
    deleteShippingZone(
        id: ShippingV2ApiSpecs.DeleteShippingZoneData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/shipping/zones/${id}`,
        });
    }

    /**
     * Get All Shipping Methods in a Zone
     *
     * Returns a list of *Shipping Methods* in a zone. Default sorting is by shipping method ID, from lowest to highest.
     */
    getShippingZoneMethods(
        zoneId: ShippingV2ApiSpecs.GetShippingZoneMethodsData['path']['zone_id'],
    ) {
        return this.request.get<ShippingV2ApiSpecs.GetShippingZoneMethodsResponse, any>({
            path: `v2/shipping/zones/${zoneId}/methods`,
        });
    }

    /**
     * Create a Shipping Method
     *
     * Creates a *Shipping Method* within a shipping zone. Real Time Carrier Connections are also supported by this endpoint. 

     ## Carrier Configurations – Current

     This section provides a sample request and a carrier-specific object/property model, for each supported carrier.

     ### USPS by Endicia

     Example request body:

     ```json
     {
         "name": "USPS by Endicia",
         "type": "endicia",
         "settings": {
             "carrier_options": {
                 "delivery_services" : ["PriorityExpress","Priority", "PriorityMailExpressInternational"],
                 "packaging_type" : "LargeFlatRateBox",
                 "show_transit_time" : true
             }
         },
         "enabled": true
     }
     ```

     #### USPS by Endicia Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | PriorityExpress, PriorityMailExpressInternational, FirstClassPackageInternationalService, Priority, PriorityMailInternational, First, ParcelSelect, MediaMail |
     | packaging_type | array | FlatRateLegalEnvelope, FlatRatePaddedEnvelope, Parcel, SmallFlatRateBox, MediumFlatRateBox, LargeFlatRateBox, FlatRateEnvelope, RegionalRateBoxA, RegionalRateBoxB |
     |show_transit_time | boolean | true, false |

     ### FedEx

     Example request body:

     ```json
     {
         "name": "FEDEX",
         "type": "fedex",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "PRIORITY_OVERNIGHT",
                     "FEDEX_2_DAY"
                 ],
                 "dropoff_type": "REGULAR_PICKUP",
                 "packaging_type": "FEDEX_ENVELOPE",
                 "packing_method": "SEPARATE",
                 "rate_type": "NONE",
                 "include_package_value": true,
                 "destination_type": "residential"
             }
         },
         "enabled": true
     }

     ```

     #### FedEx Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | PRIORITY_OVERNIGHT, STANDARD_OVERNIGHT, FIRST_OVERNIGHT, FEDEX_2_DAY, FEDEX_EXPRESS_SAVER, INTERNATIONAL_PRIORITY, INTERNATIONAL_ECONOMY, INTERNATIONAL_FIRST, FEDEX_1_DAY_FREIGHT, FEDEX_2_DAY_FREIGHT, FEDEX_3_DAY_FREIGHT, FEDEX_GROUND, GROUND_HOME_DELIVERY, INTERNATIONAL_PRIORITY_FREIGHT, INTERNATIONAL_ECONOMY_FREIGHT, EUROPE_FIRST_INTERNATIONAL_PRIORITY |
     | dropoff_type | string | REGULAR_PICKUP, REQUEST_COURIER, DROP_BOX, BUSINESS_SERVICE_CENTER, STATION |
     | packaging_type | string | FEDEX_ENVELOPE,  FEDEX_PAK, FEDEX_BOX, FEDEX_TUBE, FEDEX_10KG_BOX, FEDEX_25KG_BOX, YOUR_PACKAGING |
     | packing_method | string | SEPARATE, COMBINED |
     | rate_type | string | NONE, LIST |
     | include_package_value | boolean | true, false |
     | destination_type | string | residential, business |

     ### UPS Ready

     Example request body:

     ```json
     {
         "name": "UPS ready",
         "type": "upsready",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "2nd_Day_Air","Standard"
                 ],
                 "packaging_type": "21",
                 "packing_method": "separate",
                 "include_package_value": true,
                 "destination_type": "residential",
                 "show_transit_time" : true
             }
         },
         "enabled": true
     }

     ```

     #### UPS Ready Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | 2nd_Day_Air, 2nd_Day_Air_AM, 3_Day_Select, Expedited, Express, Express_Plus, Express_Saver, Express_Early_AM, Ground, Next_Day_Air, Next_Day_Air_Early_AM, Next_Day_Air_Saver, Saver, Standard, Today_Dedicated_Courier, Today_Express, Today_Express_Saver, Today_Intercity, Today_Standard, Worldwide_Expedited, Worldwide_Express, Worldwide_Express_Plus, Worldwide_Express_Saver, Worldwide_Saver |
     | destination_type | string | residential, business |
     | packing_method | string | separate, combined |
     | packaging_type | string (only codes allowed) | See the following table |
     | include_package_value | boolean | true, false |
     | show_transit_time | boolean | true, false |

     UPS `packaging_type` values include:

     | Code | Description |
     |:----:|:------------|
     | 21 | UPS® Express Box |
     | 24 | UPS® 25 KG Box |
     | 25 | UPS® 10 KG Box |
     | 30 | Pallet |
     | 01 | UPS® Letter |
     | 02 | Customer Supplied Package |
     | 03 | Tube |
     | 04 | PAK |
     | 2a | Small Express Box |
     | 2b | Medium Express Box |
     | 2c | Large Express Box |

     ### Canada Post

     Example request body:

     ```json
     {
         "name": "Canada Post",
         "type": "canadapost",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "DOM.RP","DOM.EP"
                 ]
             }
         },
         "enabled": true
     }

     ```

     #### Canada Post Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | DOM.RP, DOM.EP, DOM.XP, DOM.XP.CERT, DOM.PC DOM.LIB, USA.EP, USA.PW.ENV, USA.PW.PAK, USA.PW.PARCEL, USA.SP.AIR, USA.TP, USA.TP.LVM, USA.XP, INT.XP, INT.IP.AIR, INT.IP.SURF, INT.PW.ENV, INT.PW.PAK, INT.PW.PARCEL, INT.SP.AIR, INT.SP.SURF, INT.TP |

     ### Australia Post

     Example request body:

     ```json
     {
         "name": "Australia Post",
         "type": "auspost",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "AUS_PARCEL_REGULAR",
             "AUS_PARCEL_EXPRESS"
                 ]
             }
         },
         "enabled": true
     }

     ```

     #### Australia Post Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | AUS_LETTER_REGULAR_SMALL, AUS_LETTER_REGULAR_Large, AUS_LETTER_EXPRESS_SMALL, AUS_LETTER_EXPRESS_MEDIUM, AUS_LETTER_EXPRESS_LARGE, AUS_PARCEL_REGULAR, AUS_PARCEL_REGULAR_SATCHEL_500G, AUS_PARCEL_REGULAR_SATCHEL_3KG, AUS_PARCEL_REGULAR_SATCHEL_5KG, AUS_PARCEL_EXPRESS, AUS_PARCEL_EXPRESS_SATCHEL_500G, AUS_PARCEL_EXPRESS_SATCHEL_3KG, AUS_PARCEL_EXPRESS_SATCHEL_5KG, AUS_PARCEL_COURIER, AUS_PARCEL_COURIER_SATCHEL_MEDIUM, INT_PARCEL_COR_OWN_PACKAGING, INT_PARCEL_EXP_OWN_PACKAGING, INT_PARCEL_STD_OWN_PACKAGING, INT_PARCEL_AIR_OWN_PACKAGING, INT_PARCEL_SEA_OWN_PACKAGING |

     ### Royal Mail

     Example request body:

     ```json
     {
         "name": "Royal Mail",
         "type": "royalmail",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "StandardFirstClass",
                     "StandardSecondClass"
                 ]
             }
         },
         "enabled": true
     }
     ```

     #### Royal Mail Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | SpecialDelivery1pm, SpecialDelivery9am, SpecialDelivery1pmSaturday, SpecialDelivery9amSaturday, SignedForFirstClass, SignedForSecondClass, Express9, Express10, ExpressAM, Express24, Express48, StandardFirstClass, StandardSecondClass, InternationalStandard, InternationalTracked, InternationalEconomy |

     ### Zoom2U

     Example request body:

     ```json
     {
         "name": "Zoom2U",
         "type": "zoom2u",
         "settings": {
             "carrier_options": {
                 "delivery_services": [
                     "3_hour",
             "Same_day",
             "VIP"
                 ]
             }
         },
         "enabled": true
     }
     ```

     #### Zoom2U Object Properties

     | Property | Type | Values |
     | - | - | - |
     | delivery_services | array | 3_hour, Same_day, VIP|

     ### Settings Objects 

     A shipping methodʼs `type` and `settings` properties can match one of the following models:

     #### perorder Object – Properties 

     Object model for flat-rate shipping quotes per order.

     | Property | Type | Description |
     | - | - | - |
     | rate | number | Flat rate per order. |

     Example request body: 

     ```json
     {
       "name": "Flat Rate per Order",
       "type": "perorder",
       "settings": {
         "rate": 7
       }
     }
     ```

     #### peritem Object – Properties 

     Object model for flat-rate shipping quotes per item ordered.

     | Name | Type | Description |
     |:-----|:-----|:------------|
     | rate | number | Flat rate per item. |

     Example request body:

     ```json
     {
       "name": "Flat Rate per Item",
       "type": "peritem",
       "settings": {
         "rate": 8
       }
     }
     ```

     #### weight Object – Properties 

     Object model for shipping quotes by weight.

     | Property | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties depend on the default units set in the storeʼs control panel. |

     Example request body:

     ```json
     {
       "name": "Rate per Weight",
       "type": "weight",
       "settings": {
         "default_cost": 12,
         "default_cost_type": "fixed_amount",
         "range": [
           {
             "lower_limit": 0,
             "upper_limit": 20,
             "shipping_cost": 8
           },
           {
             "lower_limit": 20,
             "upper_limit": 40,
             "shipping_cost": 12
           }
         ]
       }
     }
     ```

     #### total Object – Properties 

     Object model for shipping quotes by orderʼs total value.

     | Property | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties are values in the storeʼs currency. |

     Example request body:

     This example sets free shipping above a certain order total:

     ```json
     {
       "name": "Per Total or Free",
       "type": "total",
       "settings": {
         "default_cost": 12,
         "default_cost_type": "fixed_amount",
         "range": [
           {
             "lower_limit": 0,
             "upper_limit": 5,
             "shipping_cost": 5
           },
           {
             "lower_limit": 5,
             "upper_limit": 10,
             "shipping_cost": 8
           },
           {
             "lower_limit": 10,
             "upper_limit": 20,
             "shipping_cost": 10
           },
           {
             "lower_limit": 20,
             "upper_limit": 49.99,
             "shipping_cost": 15
           },
           {
             "lower_limit": 50,
             "upper_limit": 100000,
             "shipping_cost": 0
           }       
         ]
       }
     }
     ```

     #### Range Object – Properties 

     Object model to define ranges for shipping quotes. Units are defined in the parent object.

     | Property | Type | Description |
     | - | - | - |
     | lower_limit | number | Lower limit for order total. |
     | upper_limit | number | Upper limit for order total. |
     | shipping_cost | number | Shipping cost for orders whose total falls between the lower and upper limits. |

     Example request body: 

     ```json
     {
       "lower_limit": 0,
       "upper_limit": 20,
       "shipping_cost": 8
     }
     ```

     ### Channels

     Example request body: 

     ```json
     {
       "name": "Method associated to channels 1, 3",
       "type": "peritem",
       "settings": {
         "rate": 5
       },
       "channel_ids": [1, 3]
     }
     ```

     | Property | Type | Description |
     | - | - | - |
     | channel_ids | array | Channels associated with the method as an array of integers. |
     */
    createShippingMethod(
        zoneId: ShippingV2ApiSpecs.CreateShippingMethodData['path']['zone_id'],
        requestBody: ShippingV2ApiSpecs.CreateShippingMethodData['body'],
    ) {
        return this.request.post<ShippingV2ApiSpecs.CreateShippingMethodResponse, any>({
            path: `v2/shipping/zones/${zoneId}/methods`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Shipping Method
     *
     * Returns a single *Shipping Method* in a zone. Real Time Carrier Connections are also supported by this endpoint.

     ### Settings Objects

     A shipping methodʼs `type` and `settings` properties can match one of the following models:

     ### perorder Object – Properties

     Object model for flat-rate shipping quotes per order.

     | Name | Type | Description |
     | - | - | - |
     | rate | number | Flat rate per order. |

     #### JSON Example

     ```json
     {
         "name": "Flat Rate per Order",
         "type": "perorder",
         "settings": {
             "rate": 7
         },
         "channel_ids": [1]
     },
     ```

     ### peritem Object – Properties

     Object model for flat-rate shipping quotes per item ordered.

     | Name | Type | Description |
     | - | - | - |
     | rate | number | Flat rate per item. |

     #### JSON Example

     ```json
     {
         "name": "Flat Rate per Item",
         "type": "peritem",
         "settings": {
             "rate": 8
         },
         "channel_ids": [1]
     },
     ```

     ### weight Object – Properties

     Object model for shipping quotes by weight.

     | Name | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties depend on the default units set in the storeʼs control panel. |

     #### JSON Example
     ```json
     {
         "name": "Rate per Weight",
         "type": "weight",
         "settings": {
             "default_cost": 12,
             "default_cost_type": "fixed_amount",
             "range": [
                 {
                     "lower_limit": 0,
                     "upper_limit": 20,
                     "shipping_cost": 8
                 },
                 {
                     "lower_limit": 20,
                     "upper_limit": 40,
                     "shipping_cost": 12
                 }
             ]
         },
         "channel_ids": [1]
     }
     ```

     ### total Object – Properties

     Object model for shipping quotes by orderʼs total value.

     | Name | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties are values in the storeʼs currency. |

     #### JSON Example

     This example sets free shipping above a certain order total:

     ```json
     {
         "name": "Per Total or Free",
         "type": "total",
         "settings": {
             "default_cost": 12,
             "default_cost_type": "fixed_amount",
             "range": [
                 {
                     "lower_limit": 0,
                     "upper_limit": 5,
                     "shipping_cost": 5
                 },
                 {
                     "lower_limit": 5,
                     "upper_limit": 10,
                     "shipping_cost": 8
                 },
                 {
                     "lower_limit": 10,
                     "upper_limit": 20,
                     "shipping_cost": 10
                 },
                 {
                     "lower_limit": 20,
                     "upper_limit": 49.99,
                     "shipping_cost": 15
                 },
                 {
                     "lower_limit": 50,
                     "upper_limit": 100000,
                     "shipping_cost": 0
                 }
             ]
         },
         "channel_ids": [1]
     }
     ```

     ### Range Object – Properties

     Object model to define ranges for shipping quotes. Units are defined in the parent object.

     | Name | Type | Description |
     | - | - | - |
     | lower_limit | number | Lower limit for order total. |
     | upper_limit | number | Upper limit for order total. |
     | shipping_cost | number | Shipping cost for orders whose total falls between the lower and upper limits. |

     #### JSON Example

     ```json
     {
         "lower_limit": 0,
         "upper_limit": 20,
         "shipping_cost": 8
     }
     ```

     ### Channels

     Example request body: 

     ```json
     {
       "name": "Method associated to channels 1, 3",
       "type": "peritem",
       "settings": {
         "rate": 5
       },
       "channel_ids": [1, 3]
     }
     ```

     | Property | Type | Description |
     | - | - | - |
     | channel_ids | array | Channels associated with the method as an array of integers. |
     */
    getShippingMethod(
        zoneId: ShippingV2ApiSpecs.GetShippingMethodData['path']['zone_id'],
        methodId: ShippingV2ApiSpecs.GetShippingMethodData['path']['method_id'],
    ) {
        return this.request.get<ShippingV2ApiSpecs.GetShippingMethodResponse, any>({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
        });
    }

    /**
     * Update a Shipping Method
     *
     * Updates a *Shipping Method* in a zone. Real Time Carrier Connections are also supported by this endpoint. 

     **Read Only Fields**
     * id

     ### Settings Objects 

     A shipping methodʼs `type` and `settings` properties can match one of the following models:

     #### perorder Object – Properties 

     Object model for flat-rate shipping quotes per order.

     | Property | Type | Description |
     | - | - | - |
     | rate | number | Flat rate per order. |

     Example response: 

     ```json
     {
       "name": "Flat Rate per Order",
       "type": "perorder",
       "settings": {
         "rate": 7
       }
     },
     ```

     #### peritem Object – Properties 

     Object model for flat-rate shipping quotes per item ordered.

     | Property | Type | Description |
     | - | - | - |
     | rate | number | Flat rate per item. |

     Example response: 

     ```json
     {
       "name": "Flat Rate per Item",
       "type": "peritem",
       "settings": {
         "rate": 8
       }
     },
     ```

     #### weight Object – Properties 

     Object model for shipping quotes by weight.

     | Property | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties depend on the default units set in the storeʼs control panel. |

     Example response: 

     ```json
     {
       "name": "Rate per Weight",
       "type": "weight",
       "settings": {
         "default_cost": 12,
         "default_cost_type": "fixed_amount",
         "range": [
           {
             "lower_limit": 0,
             "upper_limit": 20,
             "shipping_cost": 8
           },
           {
             "lower_limit": 20,
             "upper_limit": 40,
             "shipping_cost": 12
           }
         ]
       }
     }
     ```

     #### total Object – Properties 

     Object model for shipping quotes by orderʼs total value.

     | Property | Type | Description |
     | - | - | - |
     | default_cost | number &#124; null | Default shipping cost, applied either as a percentage of the orderʼs total value or as a fixed amount. If default cost is not required, you can supply a value of null. |
     | default_cost_type | string | How the default shipping cost is calculated; either `percentage_of_total` or `fixed_amount`. |
     | range | number | Array of [range](#range) objects. The units for these ranges' `lower_limit` and `upper_limit` properties are values in the storeʼs currency. |

     Example response: 

     This example sets free shipping above a certain order total:

     ```json
     {
       "name": "Per Total or Free",
       "type": "total",
       "settings": {
         "default_cost": 12,
         "default_cost_type": "fixed_amount",
         "range": [
           {
             "lower_limit": 0,
             "upper_limit": 5,
             "shipping_cost": 5
           },
           {
             "lower_limit": 5,
             "upper_limit": 10,
             "shipping_cost": 8
           },
           {
             "lower_limit": 10,
             "upper_limit": 20,
             "shipping_cost": 10
           },
           {
             "lower_limit": 20,
             "upper_limit": 49.99,
             "shipping_cost": 15
           },
           {
             "lower_limit": 50,
             "upper_limit": 100000,
             "shipping_cost": 0
           }       
         ]
       }
     }
     ```

     #### Range Object – Properties 

     Object model to define ranges for shipping quotes. Units are defined in the parent object.

     | Property | Type | Description |
     | - | - | - |
     | lower_limit | number | Lower limit for order total. |
     | upper_limit | number | Upper limit for order total. |
     | shipping_cost | number | Shipping cost for orders whose total falls between the lower and upper limits. |

     Example response: 

     ```json
     {
       "lower_limit": 0,
       "upper_limit": 20,
       "shipping_cost": 8
     }
     ```
     ### Channels

     Example request body: 

     ```json
     {
       "name": "Method associated to channels 1, 3",
       "type": "peritem",
       "settings": {
       "rate": 5
       },
       "channel_ids": [1, 3]
     }
     ```

     | Property | Type | Description |
     | - | - | - |
     | channel_ids | array | Channels associated with the method as an array of integers. |
     */
    updateShippingMethod(
        zoneId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['zone_id'],
        methodId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['method_id'],
        requestBody: ShippingV2ApiSpecs.UpdateShippingMethodData['body'],
    ) {
        return this.request.put<ShippingV2ApiSpecs.UpdateShippingMethodResponse, any>({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Shipping Method
     *
     * Deletes an *Shipping Method*. Real Time Carrier Connections can also be deleted.
     */
    deleteShippingMethod(
        zoneId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['zone_id'],
        methodId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['method_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
        });
    }

    /**
     * Create a Carrier Connection
     *
     * Creates a *Carrier Connection*. 

     Carrier connections refer to specific settings required to connect to a specific shipping carrier. Each carrier requires your app to supply a unique set of properties/fields to establish a connection with that carrier.

     *Notes:*

     - There is no `GET` with this resource. It has `PUT`, `POST` and `DELETE`.
         * `PUT` is used to update. The connection can be updated by API.

     - Connections created here do not enable the shipping method. To enable the carrier for a shipping zone, use the Shipping Methods API. 

     - The Carrier Connection resource returns a 204 for both successful and unsuccessful attempts to connect. If a field is missing, it will return a 400.

     ### Australia Post

     PUT or POST example request:

     ```json
     {
       "carrier_id" : "auspost",
       "connection" : {
         "auth_key" : "yourAusPostAuthKey",
         "test_mode" : false
       }
     }
     ```

     DELETE example request:

     ```json
     {
       "carrier_id" : "auspost"
     }
     ```

     #### Australia Post Connection Object – Properties

     Australia Post `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.

     | Property | Type | Description |
     | - | - | - |
     | auth_key | string | Australia Post authorization key. |
     | test_mode | boolean | Whether or not to use Australia Post test-mode settings. Acceptable values are `true` or `false`. |

     ### Endicia
     USPS is connected through Endicia.

     PUT or POST example request:

     ```json
     {  "carrier_id" : "endicia",
       "connection": {
         "account_id" : "yourEndiciaAccountId",
         "pass_phrase" : "yourEndiciaPassphrase"
       }
     }
     ```

     DELETE example request:

     ```json
     {
       "carrier_id" : "endicia"
     }
     ```

     #### Endicia Connection Object – Properties

     Endicia `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.

     | Property | Type | Description |
     | - | - | - |
     | account_id | string | Endicia account ID. |
     | passphrase | string | Endicia passphrase. |

     ### FedEx

     PUT or POST example request:

     ```json
     {
       "carrier_id" : "fedex",
       "connection" : {
         "key" : "yourFedexKey",
         "password" : "yourFedexPassword",
         "account_number" : "yourFedexAccountNumber",
         "meter_number" : "yourFedexMeterNumber"
       }
     }
     ```

     DELETE example request:

     ```json
     {
       "carrier_id" : "fedex"
     }
     ```

     #### FedEx Connection Object – Properties

     FedEx `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.

     | Property | Type | Description |
     | - | - | - |
     | key | string | FedEx account ID. | 
     | password | string | FedEx passphrase. |
     | account_number | string | FedEx account number. |
     | meter_number | string | FedEx meter number. |

     ### Royal Mail

     PUT or POST example request:

     ```json
     {
         "carrier_id" : "royalmail",
         "connection" : {

         }
     }
     ```

     DELETE example request:

     ```json
     {
         "carrier_id" : "royalmail"
     }
     ```

     #### Royal Mail Connection Object - Properties

     Royal Mail has no connection object properties.

     ### Shipping Provider API

     Please note that this endpoint is not intended for adding connection settings. 

     Its purpose is solely to establish a connection between your BigCommerce store and the carrier. If the carrier has no connection settings configured, please leave the connection property empty. However, if the carrier already has connection settings configured, you can utilize this endpoint to establish the connection using the existing connection properties.

     PUT or POST example request when your carrier is not configured with any connection settings:

     ```json filename="No connection settings configured" showLineNumbers copy
     {
       "carrier_id" : "carrier_{your_carrier_id}",
       "connection" : {}
     }
     ```

     PUT or POST example request when your carrier is configured with connection settings:

     ```json filename="Connection settings configured" showLineNumbers copy
     {
       "carrier_id" : "carrier_{your_carrier_id}",
       "connection" : {
         "your_configured_key_1": "value_1",
         "your_configured_key_2": "value_2
       }
     }
     ```

     ### Zoom2U

     PUT or POST example request:

     ```json
     {
       "carrier_id" : "zoom2u",
       "connection" : {
         "auth_key" : "yourZoom2uAuthKey",
         "test_mode" : false
       }
     }
     ```

     DELETE example request:

     ```json
     {
       "carrier_id" : "zoom2u"
     }
     ```

     #### Zoom2U Connection Object – Properties

     Zoom2U `PUT` or `POST` requests require all of the following properties. (These requests won’t be fulfilled unless these properties are valid.) `DELETE` requests require only a `carrier_id`.

     | Property | Type | Description |
     | - | - | - |
     | auth_key | string | Zoom2U authorization key. |
     | test_mode | boolean | Whether or not to use Zoom2U test-mode settings. Acceptable values are `true` or `false`. |
     */
    createCarrierConnection(
        requestBody: ShippingV2ApiSpecs.CreateCarrierConnectionData['body'],
    ) {
        return this.request.post<any, ShippingV2ApiSpecs.CreateCarrierConnectionError>({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Carrier Connection
     *
     * Updates a *Carrier Connection*.

     Updating the carrier connection is done using the same information as creating the connection. This endpoint can be used to update credentials.
     */
    updateCarrierConnection(
        requestBody: ShippingV2ApiSpecs.UpdateCarrierConnectionData['body'],
    ) {
        return this.request.put<any, ShippingV2ApiSpecs.UpdateCarrierConnectionError>({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Carrier Connection
     *
     * Deletes a *Carrier Connection*.

     **Required Fields**
     * carrier_id
     */
    deleteCarrierConnection(
        requestBody: ShippingV2ApiSpecs.DeleteCarrierConnectionData['body'],
    ) {
        return this.request.delete<any, ShippingV2ApiSpecs.DeleteCarrierConnectionError>({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}

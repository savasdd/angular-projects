/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CurrencyUnit } from './currencyUnit';


export interface Languages { 
    id?: number;
    xmin?: number;
    lang: string;
    country: string;
    title: string;
    contentId?: number;
    currencyUnit?: CurrencyUnit;
}


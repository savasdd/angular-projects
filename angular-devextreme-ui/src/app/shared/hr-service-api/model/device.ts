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
import { Department } from './department';


export interface Device {
    id?: number;
    xmin?: number;
    department?: Department;
    uuid?: string;
    major?: number;
    minor?: number;
    rssi?: string;
    accuracy?: string;
    proximity?: string;
    txPower?: string;
    macAddress: string;

}


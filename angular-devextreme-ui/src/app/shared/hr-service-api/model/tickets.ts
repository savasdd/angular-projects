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
import { Priorities } from './priorities';
import { Department } from './department';
import { Statuses } from './statuses';
import { Categories } from './categories';


export interface Tickets { 
    id?: number;
    xmin?: number;
    ticketDate?: string;
    department?: Department;
    title: string;
    content: string;
    priorities?: Priorities;
    categories?: Categories;
    statuses?: Statuses;
    ticketId?: number;
    result?: string;
}


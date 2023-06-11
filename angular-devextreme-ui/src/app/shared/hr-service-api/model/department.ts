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
import { Geometry } from './geometry';
import { DepartmentType } from './departmentType';
import { Person } from './person';
import { Contact } from './contact';
import { Location } from './location';


export interface Department { 
    id?: number;
    xmin?: number;
    parent?: Department;
    code: string;
    name: string;
    searchCode?: string;
    level?: number;
    person: Person;
    location?: Location;
    departmentType?: DepartmentType;
    geom?: Geometry;
    contacts?: Set<Contact>;
    contentId?: number;
    hasItems?: boolean;
}


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
import { GeometryFactory } from './geometryFactory';
import { Coordinate } from './coordinate';
import { PrecisionModel } from './precisionModel';
import { Point } from './point';
import { Envelope } from './envelope';


export interface Geometry { 
    envelope?: Geometry;
    factory?: GeometryFactory;
    userData?: object;
    length?: number;
    empty?: boolean;
    valid?: boolean;
    dimension?: number;
    simple?: boolean;
    envelopeInternal?: Envelope;
    boundaryDimension?: number;
    srid?: number;
    geometryType?: string;
    numGeometries?: number;
    precisionModel?: PrecisionModel;
    coordinates?: Array<Coordinate>;
    coordinate?: Coordinate;
    numPoints?: number;
    interiorPoint?: Point;
    rectangle?: boolean;
    boundary?: Geometry;
    centroid?: Point;
    area?: number;
}


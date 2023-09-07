/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Session { 
    token: string;
    tokenType: Session.TokenTypeEnum;
    revoked: boolean;
    expired: boolean;
    accountId: string;
    createdAt?: Date;
    lastModified?: Date;
    id?: string;
}
export namespace Session {
    export type TokenTypeEnum = 'BEARER';
    export const TokenTypeEnum = {
        BEARER: 'BEARER' as TokenTypeEnum
    };
}
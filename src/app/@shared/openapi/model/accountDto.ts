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
import { Account } from './account';

export interface AccountDto { 
    account?: Account;
    id?: string;
    email: string;
    role: AccountDto.RoleEnum;
    isEnabled: boolean;
    username: string;
    lastModified?: Date;
    createdAt?: Date;
    issues: number;
}
export namespace AccountDto {
    export type RoleEnum = 'USER' | 'ADMIN' | 'MANAGER';
    export const RoleEnum = {
        USER: 'USER' as RoleEnum,
        ADMIN: 'ADMIN' as RoleEnum,
        MANAGER: 'MANAGER' as RoleEnum
    };
}
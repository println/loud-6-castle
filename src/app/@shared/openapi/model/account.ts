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
import { GrantedAuthority } from './grantedAuthority';
import { Login } from './login';

export interface Account { 
    email: string;
    login: Login;
    role: Account.RoleEnum;
    status: Account.StatusEnum;
    issues: number;
    createdAt?: Date;
    lastModified?: Date;
    id?: string;
    password: string;
    isEnabled: boolean;
    username: string;
    authorities: Array<GrantedAuthority>;
    isAccountNonLocked: boolean;
    isAccountNonExpired: boolean;
    isCredentialsNonExpired: boolean;
}
export namespace Account {
    export type RoleEnum = 'USER' | 'ADMIN' | 'MANAGER';
    export const RoleEnum = {
        USER: 'USER' as RoleEnum,
        ADMIN: 'ADMIN' as RoleEnum,
        MANAGER: 'MANAGER' as RoleEnum
    };
    export type StatusEnum = 'ACTIVE' | 'BLOCKED';
    export const StatusEnum = {
        ACTIVE: 'ACTIVE' as StatusEnum,
        BLOCKED: 'BLOCKED' as StatusEnum
    };
}
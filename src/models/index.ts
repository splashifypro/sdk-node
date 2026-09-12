/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface HandlersUpdateOptOutErrorRequest
 */
export interface HandlersUpdateOptOutErrorRequest {
    /**
     * 
     * @type {boolean}
     * @memberof HandlersUpdateOptOutErrorRequest
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface HandlersUpdateWebhookRequest
 */
export interface HandlersUpdateWebhookRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof HandlersUpdateWebhookRequest
     */
    webhookEvents?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof HandlersUpdateWebhookRequest
     */
    webhookUrl?: string;
}

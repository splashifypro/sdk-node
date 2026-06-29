# PartnerEmailConfigurationSetsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**partnerEmailConfigurationSetsGet**](PartnerEmailConfigurationSetsApi.md#partneremailconfigurationsetsget) | **GET** /partner/email/configuration-sets | List configuration sets |
| [**partnerEmailConfigurationSetsIdDelete**](PartnerEmailConfigurationSetsApi.md#partneremailconfigurationsetsiddelete) | **DELETE** /partner/email/configuration-sets/{id} | Delete configuration set |
| [**partnerEmailConfigurationSetsIdGet**](PartnerEmailConfigurationSetsApi.md#partneremailconfigurationsetsidget) | **GET** /partner/email/configuration-sets/{id} | Get configuration set |
| [**partnerEmailConfigurationSetsIdPatch**](PartnerEmailConfigurationSetsApi.md#partneremailconfigurationsetsidpatch) | **PATCH** /partner/email/configuration-sets/{id} | Update configuration set |
| [**partnerEmailConfigurationSetsPost**](PartnerEmailConfigurationSetsApi.md#partneremailconfigurationsetspost) | **POST** /partner/email/configuration-sets | Create configuration set |



## partnerEmailConfigurationSetsGet

> { [key: string]: any; } partnerEmailConfigurationSetsGet(customerId)

List configuration sets

Returns every configuration set for the authenticated partner. A configuration set is a logical send context — partners typically create one per downstream end-customer or per app surface. Optional customer_id filter scopes the response to one downstream tenant.

### Example

```ts
import {
  Configuration,
  PartnerEmailConfigurationSetsApi,
} from '';
import type { PartnerEmailConfigurationSetsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailConfigurationSetsApi(config);

  const body = {
    // string | Filter to one downstream customer (optional)
    customerId: customerId_example,
  } satisfies PartnerEmailConfigurationSetsGetRequest;

  try {
    const data = await api.partnerEmailConfigurationSetsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerId** | `string` | Filter to one downstream customer | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success: true, configuration_sets: [...] } |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailConfigurationSetsIdDelete

> { [key: string]: any; } partnerEmailConfigurationSetsIdDelete(id)

Delete configuration set

Removes a configuration set + its event destinations. Sends already in flight against the deleted set complete normally; future sends referencing the deleted set fall back to \&quot;no config set\&quot; defaults (tracking on, no per-config-set webhooks).

### Example

```ts
import {
  Configuration,
  PartnerEmailConfigurationSetsApi,
} from '';
import type { PartnerEmailConfigurationSetsIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailConfigurationSetsApi(config);

  const body = {
    // string | Config set id
    id: id_example,
  } satisfies PartnerEmailConfigurationSetsIdDeleteRequest;

  try {
    const data = await api.partnerEmailConfigurationSetsIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Config set id | [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success: true } |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Config set not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailConfigurationSetsIdGet

> { [key: string]: any; } partnerEmailConfigurationSetsIdGet(id)

Get configuration set

Returns one configuration set by id, including the current track_opens / track_clicks flags.

### Example

```ts
import {
  Configuration,
  PartnerEmailConfigurationSetsApi,
} from '';
import type { PartnerEmailConfigurationSetsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailConfigurationSetsApi(config);

  const body = {
    // string | Config set id
    id: id_example,
  } satisfies PartnerEmailConfigurationSetsIdGetRequest;

  try {
    const data = await api.partnerEmailConfigurationSetsIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Config set id | [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success: true, configuration_set: {...} } |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Config set not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailConfigurationSetsIdPatch

> { [key: string]: any; } partnerEmailConfigurationSetsIdPatch(id, body)

Update configuration set

Patches an existing configuration set. All fields optional — only the keys you supply are updated. Use this to flip track_opens / track_clicks on existing config sets without recreating them.

### Example

```ts
import {
  Configuration,
  PartnerEmailConfigurationSetsApi,
} from '';
import type { PartnerEmailConfigurationSetsIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailConfigurationSetsApi(config);

  const body = {
    // string | Config set id
    id: id_example,
    // object | Any subset of: name, description, suppression_options, reputation_tracking_enabled, sending_enabled, track_opens, track_clicks, custom_redirect_domain, tags.
    body: Object,
  } satisfies PartnerEmailConfigurationSetsIdPatchRequest;

  try {
    const data = await api.partnerEmailConfigurationSetsIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Config set id | [Defaults to `undefined`] |
| **body** | `object` | Any subset of: name, description, suppression_options, reputation_tracking_enabled, sending_enabled, track_opens, track_clicks, custom_redirect_domain, tags. | |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success: true, configuration_set: {...} } |  -  |
| **400** | Validation error |  -  |
| **401** | Missing/invalid API key |  -  |
| **404** | Config set not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partnerEmailConfigurationSetsPost

> { [key: string]: any; } partnerEmailConfigurationSetsPost(body)

Create configuration set

Creates a new configuration set. New flags track_opens + track_clicks (both default true) control whether Splashify Pro injects the open-tracking pixel + rewrites &lt;a href&gt; URLs through the click-tracking redirect on emails sent through this config set. Set both to false for transactional / privacy-sensitive flows. See partner-docs.splashifypro.com/webhooks/tracking for the full guide.

### Example

```ts
import {
  Configuration,
  PartnerEmailConfigurationSetsApi,
} from '';
import type { PartnerEmailConfigurationSetsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new PartnerEmailConfigurationSetsApi(config);

  const body = {
    // object | Config set fields. Required: name. Optional: description, customer_id, suppression_options (NONE / BOUNCE / COMPLAINT / BOUNCE_AND_COMPLAINT), reputation_tracking_enabled (default true), sending_enabled (default true), track_opens (default true), track_clicks (default true), custom_redirect_domain, tags.
    body: Object,
  } satisfies PartnerEmailConfigurationSetsPostRequest;

  try {
    const data = await api.partnerEmailConfigurationSetsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `object` | Config set fields. Required: name. Optional: description, customer_id, suppression_options (NONE / BOUNCE / COMPLAINT / BOUNCE_AND_COMPLAINT), reputation_tracking_enabled (default true), sending_enabled (default true), track_opens (default true), track_clicks (default true), custom_redirect_domain, tags. | |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | { success: true, configuration_set: {...} } |  -  |
| **400** | Validation error |  -  |
| **401** | Missing/invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


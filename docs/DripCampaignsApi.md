# DripCampaignsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicDripCampaignsGet**](DripCampaignsApi.md#publicdripcampaignsget) | **GET** /public/drip/campaigns | List drip campaigns |
| [**publicDripStartPost**](DripCampaignsApi.md#publicdripstartpost) | **POST** /public/drip/start | Start a drip campaign for a contact |



## publicDripCampaignsGet

> { [key: string]: any; } publicDripCampaignsGet()

List drip campaigns

Returns this account\&#39;s drip campaigns with their id, name and status. Use the campaign_id with the start endpoint.

### Example

```ts
import {
  Configuration,
  DripCampaignsApi,
} from '@splashifypro/sdk';
import type { PublicDripCampaignsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const api = new DripCampaignsApi();

  try {
    const data = await api.publicDripCampaignsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicDripStartPost

> { [key: string]: any; } publicDripStartPost(request)

Start a drip campaign for a contact

Enrols one contact into a drip campaign. The first message goes out after that step\&#39;s configured wait, and the rest follow on their own schedule. The campaign must be running. Safe to call twice — a contact already in the campaign is reported, not enrolled again.

### Example

```ts
import {
  Configuration,
  DripCampaignsApi,
} from '@splashifypro/sdk';
import type { PublicDripStartPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const api = new DripCampaignsApi();

  const body = {
    // object | campaign_id and phone_number
    request: Object,
  } satisfies PublicDripStartPostRequest;

  try {
    const data = await api.publicDripStartPost(body);
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
| **request** | `object` | campaign_id and phone_number | |

### Return type

**{ [key: string]: any; }**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


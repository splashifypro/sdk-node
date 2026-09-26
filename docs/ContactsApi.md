# ContactsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicApisUsersPost**](ContactsApi.md#publicapisuserspost) | **POST** /public/apis/users | List contacts (paginated, filterable) |
| [**publicContactsDeletePost**](ContactsApi.md#publiccontactsdeletepost) | **POST** /public/contacts/delete | Delete a contact |
| [**publicContactsNotesPost**](ContactsApi.md#publiccontactsnotespost) | **POST** /public/contacts/notes | Add a note to a contact |
| [**publicContactsPost**](ContactsApi.md#publiccontactspost) | **POST** /public/contacts | Create a contact |
| [**publicContactsTagsPost**](ContactsApi.md#publiccontactstagspost) | **POST** /public/contacts/tags | Assign tags to a contact |
| [**publicContactsTagsRemovePost**](ContactsApi.md#publiccontactstagsremovepost) | **POST** /public/contacts/tags/remove | Remove tags from a contact |



## publicApisUsersPost

> { [key: string]: any; } publicApisUsersPost(offset, limit, body)

List contacts (paginated, filterable)

Returns a paginated list of contacts (customers) for the authenticated account. Filters are applied in-memory and support traits: created_at_utc, modified_at_utc, phone_number, name, email, whatsapp_opted_in, plus any custom column from the contact\&#39;s column_data.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicApisUsersPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // number | Pagination offset (default 0) (optional)
    offset: 56,
    // number | Page size (default 100, max 500) (optional)
    limit: 56,
    // object | Optional filter object: {filters:[{trait,op,val}]} (optional)
    body: Object,
  } satisfies PublicApisUsersPostRequest;

  try {
    const data = await api.publicApisUsersPost(body);
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
| **offset** | `number` | Pagination offset (default 0) | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size (default 100, max 500) | [Optional] [Defaults to `undefined`] |
| **body** | `object` | Optional filter object: {filters:[{trait,op,val}]} | [Optional] |

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
| **200** | { result: true, data: { customers: [...], total_customers, has_next_page } } |  -  |
| **401** | Missing/invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicContactsDeletePost

> { [key: string]: any; } publicContactsDeletePost(body)

Delete a contact

Permanently delete a contact and its conversation history.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicContactsDeletePostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // object | { phone_number | contact_id }
    body: Object,
  } satisfies PublicContactsDeletePostRequest;

  try {
    const data = await api.publicContactsDeletePost(body);
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
| **body** | `object` | { phone_number | contact_id } | |

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
| **200** | { result: true } |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicContactsNotesPost

> { [key: string]: any; } publicContactsNotesPost(body)

Add a note to a contact

Append (default) or replace the free-text notes on a contact.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicContactsNotesPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // object | { phone_number | contact_id, note, append }
    body: Object,
  } satisfies PublicContactsNotesPostRequest;

  try {
    const data = await api.publicContactsNotesPost(body);
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
| **body** | `object` | { phone_number | contact_id, note, append } | |

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
| **200** | { result: true, notes: \&#39;…\&#39; } |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicContactsPost

> { [key: string]: any; } publicContactsPost(body)

Create a contact

Add a new contact to your Splashify workspace.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicContactsPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // object | Contact payload (phone_number, display_name, …)
    body: Object,
  } satisfies PublicContactsPostRequest;

  try {
    const data = await api.publicContactsPost(body);
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
| **body** | `object` | Contact payload (phone_number, display_name, …) | |

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
| **201** | { result: true, contact: {…} } |  -  |
| **400** | Invalid request body |  -  |
| **409** | Contact already exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicContactsTagsPost

> { [key: string]: any; } publicContactsTagsPost(body)

Assign tags to a contact

Add one or more tags to a contact. Existing tags are preserved.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicContactsTagsPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // object | { phone_number | contact_id, tags: [] }
    body: Object,
  } satisfies PublicContactsTagsPostRequest;

  try {
    const data = await api.publicContactsTagsPost(body);
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
| **body** | `object` | { phone_number | contact_id, tags: [] } | |

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
| **200** | { result: true, tags: [] } |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicContactsTagsRemovePost

> { [key: string]: any; } publicContactsTagsRemovePost(body)

Remove tags from a contact

Remove one or more tags from a contact.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@splashifypro/sdk';
import type { PublicContactsTagsRemovePostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContactsApi(config);

  const body = {
    // object | { phone_number | contact_id, tags: [] }
    body: Object,
  } satisfies PublicContactsTagsRemovePostRequest;

  try {
    const data = await api.publicContactsTagsRemovePost(body);
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
| **body** | `object` | { phone_number | contact_id, tags: [] } | |

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
| **200** | { result: true, tags: [] } |  -  |
| **404** | Contact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


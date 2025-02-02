In many cases, you need to process data on the server before a chart displays it. The Chart component supports this scenario. 

In this demo, the data source of the Chart loads weather data for a selected month from an OData service. Each time you select a different month in the drop-down menu, the data source sends a new query to the service. To implement this functionality, assign a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object to the Chart's [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource) property. 

In the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), implement the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). An OData service can include multiple entity collections related to each other, but the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) specifies only one collection. To load multiple collections at once, set the [expand](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#expand) property to an array with the additional collection titles. Then, call the [postProcess](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess) function to process additional data.

Set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) property to **false** to prevent data from partitioning. You can also apply a [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) to the received values.

Once you load the data, specify the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/) type and its nested options ([argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#valueField)), so the component can determine the objects that indicate Chart arguments and values in the data source.

[note]

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=charts-demo-server-side" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=charts-demo-server-side" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=charts-demo-server-side" target="_blank">DevExpress Download Manager</a>.

[/note]
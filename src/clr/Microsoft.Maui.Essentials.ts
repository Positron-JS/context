
    // Microsoft.Maui.Authentication.IAppleSignInAuthenticator
    export declare class Microsoft_Maui_Authentication_IAppleSignInAuthenticator  {
			authenticateAsync(options: Microsoft_Maui_Authentication_Options): any

        }


    // Microsoft.Maui.Authentication.AppleSignInAuthenticator
    export declare class Microsoft_Maui_Authentication_AppleSignInAuthenticator  {
			static get default(): Microsoft_Maui_Authentication_IAppleSignInAuthenticator
			static authenticateAsync(options: Microsoft_Maui_Authentication_Options): any

        }


    // Microsoft.Maui.Authentication.IWebAuthenticator
    export declare class Microsoft_Maui_Authentication_IWebAuthenticator  {
			authenticateAsync(webAuthenticatorOptions: Microsoft_Maui_Authentication_WebAuthenticatorOptions): any

        }


    // Microsoft.Maui.Authentication.IPlatformWebAuthenticatorCallback
    export declare class Microsoft_Maui_Authentication_IPlatformWebAuthenticatorCallback  {

        }


    // Microsoft.Maui.Authentication.IWebAuthenticatorResponseDecoder
    export declare class Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder  {
			decodeResponse(uri: any): any

        }


    // Microsoft.Maui.Authentication.WebAuthenticator
    export declare class Microsoft_Maui_Authentication_WebAuthenticator  {
			static get default(): Microsoft_Maui_Authentication_IWebAuthenticator
			static authenticateAsync(url: any,callbackUrl: any): any
			static authenticateAsync(webAuthenticatorOptions: Microsoft_Maui_Authentication_WebAuthenticatorOptions): any

        }


    // Microsoft.Maui.Authentication.WebAuthenticatorExtensions
    export declare class Microsoft_Maui_Authentication_WebAuthenticatorExtensions  {
			static authenticateAsync(webAuthenticator: Microsoft_Maui_Authentication_IWebAuthenticator,url: any,callbackUrl: any): any

        }


    // Microsoft.Maui.Authentication.WebAuthenticatorOptions
    export declare class Microsoft_Maui_Authentication_WebAuthenticatorOptions  {
			get url(): any
			set url(v: any);
			get callbackUrl(): any
			set callbackUrl(v: any);
			get prefersEphemeralWebBrowserSession(): boolean
			set prefersEphemeralWebBrowserSession(v: boolean);
			get responseDecoder(): Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder
			set responseDecoder(v: Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder);

        }


    // Microsoft.Maui.Authentication.WebAuthenticatorResult
    export declare class Microsoft_Maui_Authentication_WebAuthenticatorResult  {
			get callbackUri(): any
			get timestamp(): any
			set timestamp(v: any);
			get properties(): any
			set properties(v: any);
			get accessToken(): string
			get refreshToken(): string
			get idToken(): string
			get refreshTokenExpiresIn(): any
			get expiresIn(): any
			put(key: string,value: string): any
			get(key: string): string

        }


    // Microsoft.Maui.Accessibility.ISemanticScreenReader
    export declare class Microsoft_Maui_Accessibility_ISemanticScreenReader  {
			announce(text: string): any

        }


    // Microsoft.Maui.Accessibility.SemanticScreenReader
    export declare class Microsoft_Maui_Accessibility_SemanticScreenReader  {
			static get default(): Microsoft_Maui_Accessibility_ISemanticScreenReader
			static announce(text: string): any

        }


    // Microsoft.Maui.Media.IMediaPicker
    export declare class Microsoft_Maui_Media_IMediaPicker  {
			get isCaptureSupported(): boolean
			pickPhotoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			capturePhotoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			pickVideoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			captureVideoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any

        }


    // Microsoft.Maui.Media.MediaPicker
    export declare class Microsoft_Maui_Media_MediaPicker  {
			static get isCaptureSupported(): boolean
			static get default(): Microsoft_Maui_Media_IMediaPicker
			static pickPhotoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			static capturePhotoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			static pickVideoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any
			static captureVideoAsync(options: Microsoft_Maui_Media_MediaPickerOptions): any

        }


    // Microsoft.Maui.Media.MediaPickerOptions
    export declare class Microsoft_Maui_Media_MediaPickerOptions  {
			get title(): string
			set title(v: string);

        }


    // Microsoft.Maui.Media.IScreenshot
    export declare class Microsoft_Maui_Media_IScreenshot  {
			get isCaptureSupported(): boolean
			captureAsync(): any

        }


    // Microsoft.Maui.Media.IPlatformScreenshot
    export declare class Microsoft_Maui_Media_IPlatformScreenshot  {

        }


    // Microsoft.Maui.Media.IScreenshotResult
    export declare class Microsoft_Maui_Media_IScreenshotResult  {
			get width(): number
			get height(): number
			openReadAsync(format: Microsoft_Maui_Media_ScreenshotFormat,quality: number): any
			copyToAsync(destination: any,format: Microsoft_Maui_Media_ScreenshotFormat,quality: number): any

        }


    // Microsoft.Maui.Media.Screenshot
    export declare class Microsoft_Maui_Media_Screenshot  {
			static get isCaptureSupported(): boolean
			static get default(): Microsoft_Maui_Media_IScreenshot
			static captureAsync(): any

        }


    // Microsoft.Maui.Media.ScreenshotExtensions
    export declare class Microsoft_Maui_Media_ScreenshotExtensions  {

        }

export type Microsoft_Maui_Media_ScreenshotFormat = 
"Png"
|"Jpeg"
;

    // Microsoft.Maui.Media.ITextToSpeech
    export declare class Microsoft_Maui_Media_ITextToSpeech  {
			getLocalesAsync(): any
			speakAsync(text: string,options: Microsoft_Maui_Media_SpeechOptions,cancelToken: any): any

        }


    // Microsoft.Maui.Media.TextToSpeech
    export declare class Microsoft_Maui_Media_TextToSpeech  {
			static get default(): Microsoft_Maui_Media_ITextToSpeech
			static getLocalesAsync(): any
			static speakAsync(text: string,cancelToken: any): any
			static speakAsync(text: string,options: Microsoft_Maui_Media_SpeechOptions,cancelToken: any): any

        }


    // Microsoft.Maui.Media.Locale
    export declare class Microsoft_Maui_Media_Locale  {
			get language(): string
			get country(): string
			get name(): string
			get id(): string

        }


    // Microsoft.Maui.Media.SpeechOptions
    export declare class Microsoft_Maui_Media_SpeechOptions  {
			get locale(): Microsoft_Maui_Media_Locale
			set locale(v: Microsoft_Maui_Media_Locale);
			get pitch(): number
			set pitch(v: number);
			get volume(): number
			set volume(v: number);

        }


    // Microsoft.Maui.Media.UnitConverters
    export declare class Microsoft_Maui_Media_UnitConverters  {
			static fahrenheitToCelsius(fahrenheit: number): number
			static celsiusToFahrenheit(celsius: number): number
			static celsiusToKelvin(celsius: number): number
			static kelvinToCelsius(kelvin: number): number
			static milesToMeters(miles: number): number
			static milesToKilometers(miles: number): number
			static kilometersToMiles(kilometers: number): number
			static degreesToRadians(degrees: number): number
			static radiansToDegrees(radians: number): number
			static poundsToKilograms(pounds: number): number
			static poundsToStones(pounds: number): number
			static stonesToPounds(stones: number): number
			static kilogramsToPounds(kilograms: number): number
			static degreesPerSecondToRadiansPerSecond(degrees: number): number
			static radiansPerSecondToDegreesPerSecond(radians: number): number
			static degreesPerSecondToHertz(degrees: number): number
			static radiansPerSecondToHertz(radians: number): number
			static hertzToDegreesPerSecond(hertz: number): number
			static hertzToRadiansPerSecond(hertz: number): number
			static kilopascalsToHectopascals(kpa: number): number
			static hectopascalsToKilopascals(hpa: number): number
			static kilopascalsToPascals(kpa: number): number
			static hectopascalsToPascals(hpa: number): number
			static atmospheresToPascals(atm: number): number
			static pascalsToAtmospheres(pascals: number): number
			static coordinatesToMiles(lat1: number,lon1: number,lat2: number,lon2: number): number
			static coordinatesToKilometers(lat1: number,lon1: number,lat2: number,lon2: number): number
			static metersToInternationalFeet(meters: number): number
			static internationalFeetToMeters(internationalFeet: number): number
			static metersToUSSurveyFeet(meters: number): number
			static uSSurveyFeetToMeters(usFeet: number): number

        }


    // Microsoft.Maui.Storage.IFilePicker
    export declare class Microsoft_Maui_Storage_IFilePicker  {
			pickAsync(options: Microsoft_Maui_Storage_PickOptions): any
			pickMultipleAsync(options: Microsoft_Maui_Storage_PickOptions): any

        }


    // Microsoft.Maui.Storage.FilePicker
    export declare class Microsoft_Maui_Storage_FilePicker  {
			static get default(): Microsoft_Maui_Storage_IFilePicker
			static pickAsync(options: Microsoft_Maui_Storage_PickOptions): any
			static pickMultipleAsync(options: Microsoft_Maui_Storage_PickOptions): any

        }


    // Microsoft.Maui.Storage.FilePickerFileType
    export declare class Microsoft_Maui_Storage_FilePickerFileType  {
			get value(): any
			static images: Microsoft_Maui_Storage_FilePickerFileType
			static png: Microsoft_Maui_Storage_FilePickerFileType
			static jpeg: Microsoft_Maui_Storage_FilePickerFileType
			static videos: Microsoft_Maui_Storage_FilePickerFileType
			static pdf: Microsoft_Maui_Storage_FilePickerFileType

        }


    // Microsoft.Maui.Storage.PickOptions
    export declare class Microsoft_Maui_Storage_PickOptions  {
			static get default(): Microsoft_Maui_Storage_PickOptions
			static get images(): Microsoft_Maui_Storage_PickOptions
			get pickerTitle(): string
			set pickerTitle(v: string);
			get fileTypes(): Microsoft_Maui_Storage_FilePickerFileType
			set fileTypes(v: Microsoft_Maui_Storage_FilePickerFileType);

        }


    // Microsoft.Maui.Storage.IFileSystem
    export declare class Microsoft_Maui_Storage_IFileSystem  {
			get cacheDirectory(): string
			get appDataDirectory(): string
			openAppPackageFileAsync(filename: string): any
			appPackageFileExistsAsync(filename: string): any

        }


    // Microsoft.Maui.Storage.FileSystem
    export declare class Microsoft_Maui_Storage_FileSystem  {
			static get cacheDirectory(): string
			static get appDataDirectory(): string
			static get current(): Microsoft_Maui_Storage_IFileSystem
			static openAppPackageFileAsync(filename: string): any
			static appPackageFileExistsAsync(filename: string): any

        }


    // Microsoft.Maui.Storage.FileSystemImplementation
    export declare class Microsoft_Maui_Storage_FileSystemImplementation  {
			get cacheDirectory(): string
			get appDataDirectory(): string
			openAppPackageFileAsync(filename: string): any
			appPackageFileExistsAsync(filename: string): any

        }


    // Microsoft.Maui.Storage.FileBase
    export declare class Microsoft_Maui_Storage_FileBase  {
			get fullPath(): string
			set fullPath(v: string);
			get contentType(): string
			set contentType(v: string);
			get fileName(): string
			set fileName(v: string);
			openReadAsync(): any

        }


    // Microsoft.Maui.Storage.ReadOnlyFile
    export declare class Microsoft_Maui_Storage_ReadOnlyFile  {

        }


    // Microsoft.Maui.Storage.FileResult
    export declare class Microsoft_Maui_Storage_FileResult  {

        }


    // Microsoft.Maui.Storage.IPreferences
    export declare class Microsoft_Maui_Storage_IPreferences  {
			containsKey(key: string,sharedName: string): boolean
			remove(key: string,sharedName: string): any
			clear(sharedName: string): any
			set(key: string,value: any,sharedName: string): any
			get(key: string,defaultValue: any,sharedName: string): any

        }


    // Microsoft.Maui.Storage.Preferences
    export declare class Microsoft_Maui_Storage_Preferences  {
			static get default(): Microsoft_Maui_Storage_IPreferences
			static containsKey(key: string): boolean
			static remove(key: string): any
			static clear(): any
			static get(key: string,defaultValue: string): string
			static get(key: string,defaultValue: boolean): boolean
			static get(key: string,defaultValue: number): number
			static get(key: string,defaultValue: number): number
			static get(key: string,defaultValue: number): number
			static get(key: string,defaultValue: number): number
			static set(key: string,value: string): any
			static set(key: string,value: boolean): any
			static set(key: string,value: number): any
			static set(key: string,value: number): any
			static set(key: string,value: number): any
			static set(key: string,value: number): any
			static containsKey(key: string,sharedName: string): boolean
			static remove(key: string,sharedName: string): any
			static clear(sharedName: string): any
			static get(key: string,defaultValue: string,sharedName: string): string
			static get(key: string,defaultValue: boolean,sharedName: string): boolean
			static get(key: string,defaultValue: number,sharedName: string): number
			static get(key: string,defaultValue: number,sharedName: string): number
			static get(key: string,defaultValue: number,sharedName: string): number
			static get(key: string,defaultValue: number,sharedName: string): number
			static set(key: string,value: string,sharedName: string): any
			static set(key: string,value: boolean,sharedName: string): any
			static set(key: string,value: number,sharedName: string): any
			static set(key: string,value: number,sharedName: string): any
			static set(key: string,value: number,sharedName: string): any
			static set(key: string,value: number,sharedName: string): any
			static get(key: string,defaultValue: Date): Date
			static set(key: string,value: Date): any
			static get(key: string,defaultValue: Date,sharedName: string): Date
			static set(key: string,value: Date,sharedName: string): any

        }


    // Microsoft.Maui.Storage.ISecureStorage
    export declare class Microsoft_Maui_Storage_ISecureStorage  {
			getAsync(key: string): any
			setAsync(key: string,value: string): any
			remove(key: string): boolean
			removeAll(): any

        }


    // Microsoft.Maui.Storage.IPlatformSecureStorage
    export declare class Microsoft_Maui_Storage_IPlatformSecureStorage  {

        }


    // Microsoft.Maui.Storage.SecureStorage
    export declare class Microsoft_Maui_Storage_SecureStorage  {
			static get default(): Microsoft_Maui_Storage_ISecureStorage
			static getAsync(key: string): any
			static setAsync(key: string,value: string): any
			static remove(key: string): boolean
			static removeAll(): any

        }


    // Microsoft.Maui.Storage.SecureStorageExtensions
    export declare class Microsoft_Maui_Storage_SecureStorageExtensions  {

        }


    // Microsoft.Maui.Networking.IConnectivity
    export declare class Microsoft_Maui_Networking_IConnectivity  {
			get connectionProfiles(): any
			get networkAccess(): Microsoft_Maui_Networking_NetworkAccess

        }


    // Microsoft.Maui.Networking.Connectivity
    export declare class Microsoft_Maui_Networking_Connectivity  {
			static get networkAccess(): Microsoft_Maui_Networking_NetworkAccess
			static get connectionProfiles(): any
			static get current(): Microsoft_Maui_Networking_IConnectivity

        }


    // Microsoft.Maui.Networking.ConnectivityChangedEventArgs
    export declare class Microsoft_Maui_Networking_ConnectivityChangedEventArgs  {
			get networkAccess(): Microsoft_Maui_Networking_NetworkAccess
			get connectionProfiles(): any
			toString(): string

        }

export type Microsoft_Maui_Networking_ConnectionProfile = 
"Unknown"
|"Bluetooth"
|"Cellular"
|"Ethernet"
|"WiFi"
;
export type Microsoft_Maui_Networking_NetworkAccess = 
"Unknown"
|"None"
|"Local"
|"ConstrainedInternet"
|"Internet"
;

    // Microsoft.Maui.ApplicationModel.IAppActions
    export declare class Microsoft_Maui_ApplicationModel_IAppActions  {
			get isSupported(): boolean
			getAsync(): any
			setAsync(actions: any): any

        }


    // Microsoft.Maui.ApplicationModel.IPlatformAppActions
    export declare class Microsoft_Maui_ApplicationModel_IPlatformAppActions  {

        }


    // Microsoft.Maui.ApplicationModel.AppActions
    export declare class Microsoft_Maui_ApplicationModel_AppActions  {
			static get isSupported(): boolean
			static get current(): Microsoft_Maui_ApplicationModel_IAppActions
			static getAsync(): any
			static setAsync(actions: Microsoft_Maui_ApplicationModel_AppAction[]): any
			static setAsync(actions: any): any

        }


    // Microsoft.Maui.ApplicationModel.AppActionsExtensions
    export declare class Microsoft_Maui_ApplicationModel_AppActionsExtensions  {

        }


    // Microsoft.Maui.ApplicationModel.AppActionEventArgs
    export declare class Microsoft_Maui_ApplicationModel_AppActionEventArgs  {
			get appAction(): Microsoft_Maui_ApplicationModel_AppAction

        }


    // Microsoft.Maui.ApplicationModel.AppAction
    export declare class Microsoft_Maui_ApplicationModel_AppAction  {
			get title(): string
			set title(v: string);
			get subtitle(): string
			set subtitle(v: string);
			get id(): string
			set id(v: string);

        }


    // Microsoft.Maui.ApplicationModel.IAppInfo
    export declare class Microsoft_Maui_ApplicationModel_IAppInfo  {
			get packageName(): string
			get name(): string
			get versionString(): string
			get version(): any
			get buildString(): string
			get requestedTheme(): Microsoft_Maui_ApplicationModel_AppTheme
			get packagingModel(): Microsoft_Maui_ApplicationModel_AppPackagingModel
			get requestedLayoutDirection(): Microsoft_Maui_ApplicationModel_LayoutDirection
			showSettingsUI(): any

        }


    // Microsoft.Maui.ApplicationModel.AppInfo
    export declare class Microsoft_Maui_ApplicationModel_AppInfo  {
			static get packageName(): string
			static get name(): string
			static get versionString(): string
			static get version(): any
			static get buildString(): string
			static get requestedTheme(): Microsoft_Maui_ApplicationModel_AppTheme
			static get packagingModel(): Microsoft_Maui_ApplicationModel_AppPackagingModel
			static get requestedLayoutDirection(): Microsoft_Maui_ApplicationModel_LayoutDirection
			static get current(): Microsoft_Maui_ApplicationModel_IAppInfo
			static showSettingsUI(): any

        }

export type Microsoft_Maui_ApplicationModel_AppPackagingModel = 
"Packaged"
|"Unpackaged"
;
export type Microsoft_Maui_ApplicationModel_AppTheme = 
"Unspecified"
|"Light"
|"Dark"
;
export type Microsoft_Maui_ApplicationModel_LayoutDirection = 
"Unknown"
|"LeftToRight"
|"RightToLeft"
;

    // Microsoft.Maui.ApplicationModel.IBrowser
    export declare class Microsoft_Maui_ApplicationModel_IBrowser  {
			openAsync(uri: any,options: Microsoft_Maui_ApplicationModel_BrowserLaunchOptions): any

        }


    // Microsoft.Maui.ApplicationModel.Browser
    export declare class Microsoft_Maui_ApplicationModel_Browser  {
			static get default(): Microsoft_Maui_ApplicationModel_IBrowser
			static openAsync(uri: string): any
			static openAsync(uri: string,launchMode: Microsoft_Maui_ApplicationModel_BrowserLaunchMode): any
			static openAsync(uri: string,options: Microsoft_Maui_ApplicationModel_BrowserLaunchOptions): any
			static openAsync(uri: any): any
			static openAsync(uri: any,launchMode: Microsoft_Maui_ApplicationModel_BrowserLaunchMode): any
			static openAsync(uri: any,options: Microsoft_Maui_ApplicationModel_BrowserLaunchOptions): any

        }


    // Microsoft.Maui.ApplicationModel.BrowserExtensions
    export declare class Microsoft_Maui_ApplicationModel_BrowserExtensions  {
			static openAsync(browser: Microsoft_Maui_ApplicationModel_IBrowser,uri: string): any
			static openAsync(browser: Microsoft_Maui_ApplicationModel_IBrowser,uri: string,launchMode: Microsoft_Maui_ApplicationModel_BrowserLaunchMode): any
			static openAsync(browser: Microsoft_Maui_ApplicationModel_IBrowser,uri: string,options: Microsoft_Maui_ApplicationModel_BrowserLaunchOptions): any
			static openAsync(browser: Microsoft_Maui_ApplicationModel_IBrowser,uri: any): any
			static openAsync(browser: Microsoft_Maui_ApplicationModel_IBrowser,uri: any,launchMode: Microsoft_Maui_ApplicationModel_BrowserLaunchMode): any

        }

export type Microsoft_Maui_ApplicationModel_BrowserLaunchMode = 
"SystemPreferred"
|"External"
;

    // Microsoft.Maui.ApplicationModel.BrowserLaunchOptions
    export declare class Microsoft_Maui_ApplicationModel_BrowserLaunchOptions  {
			get preferredToolbarColor(): any
			set preferredToolbarColor(v: any);
			get preferredControlColor(): any
			set preferredControlColor(v: any);
			get launchMode(): Microsoft_Maui_ApplicationModel_BrowserLaunchMode
			set launchMode(v: Microsoft_Maui_ApplicationModel_BrowserLaunchMode);
			get titleMode(): Microsoft_Maui_ApplicationModel_BrowserTitleMode
			set titleMode(v: Microsoft_Maui_ApplicationModel_BrowserTitleMode);
			get flags(): Microsoft_Maui_ApplicationModel_BrowserLaunchFlags
			set flags(v: Microsoft_Maui_ApplicationModel_BrowserLaunchFlags);

        }

export type Microsoft_Maui_ApplicationModel_BrowserLaunchFlags = 
"None"
|"LaunchAdjacent"
|"PresentAsPageSheet"
|"PresentAsFormSheet"
;
export type Microsoft_Maui_ApplicationModel_BrowserTitleMode = 
"Default"
|"Show"
|"Hide"
;

    // Microsoft.Maui.ApplicationModel.ILauncher
    export declare class Microsoft_Maui_ApplicationModel_ILauncher  {
			canOpenAsync(uri: any): any
			openAsync(uri: any): any
			openAsync(request: Microsoft_Maui_ApplicationModel_OpenFileRequest): any
			tryOpenAsync(uri: any): any

        }


    // Microsoft.Maui.ApplicationModel.Launcher
    export declare class Microsoft_Maui_ApplicationModel_Launcher  {
			static get default(): Microsoft_Maui_ApplicationModel_ILauncher
			static canOpenAsync(uri: string): any
			static canOpenAsync(uri: any): any
			static openAsync(uri: string): any
			static openAsync(uri: any): any
			static openAsync(request: Microsoft_Maui_ApplicationModel_OpenFileRequest): any
			static tryOpenAsync(uri: string): any
			static tryOpenAsync(uri: any): any

        }


    // Microsoft.Maui.ApplicationModel.LauncherExtensions
    export declare class Microsoft_Maui_ApplicationModel_LauncherExtensions  {
			static canOpenAsync(launcher: Microsoft_Maui_ApplicationModel_ILauncher,uri: string): any
			static openAsync(launcher: Microsoft_Maui_ApplicationModel_ILauncher,uri: string): any
			static tryOpenAsync(launcher: Microsoft_Maui_ApplicationModel_ILauncher,uri: string): any

        }


    // Microsoft.Maui.ApplicationModel.OpenFileRequest
    export declare class Microsoft_Maui_ApplicationModel_OpenFileRequest  {
			get title(): string
			set title(v: string);
			get file(): Microsoft_Maui_Storage_ReadOnlyFile
			set file(v: Microsoft_Maui_Storage_ReadOnlyFile);
			get presentationSourceBounds(): any
			set presentationSourceBounds(v: any);

        }


    // Microsoft.Maui.ApplicationModel.MainThread
    export declare class Microsoft_Maui_ApplicationModel_MainThread  {
			static get isMainThread(): boolean
			static beginInvokeOnMainThread(action: any): any
			static invokeOnMainThreadAsync(action: any): any
			static invokeOnMainThreadAsync(func: any): any
			static invokeOnMainThreadAsync(funcTask: any): any
			static invokeOnMainThreadAsync(funcTask: any): any
			static getMainThreadSynchronizationContextAsync(): any

        }


    // Microsoft.Maui.ApplicationModel.IMap
    export declare class Microsoft_Maui_ApplicationModel_IMap  {
			openAsync(latitude: number,longitude: number,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			openAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			tryOpenAsync(latitude: number,longitude: number,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			tryOpenAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any

        }


    // Microsoft.Maui.ApplicationModel.Map
    export declare class Microsoft_Maui_ApplicationModel_Map  {
			static get default(): Microsoft_Maui_ApplicationModel_IMap
			static openAsync(location: Microsoft_Maui_Devices_Sensors_Location): any
			static openAsync(location: Microsoft_Maui_Devices_Sensors_Location,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static openAsync(latitude: number,longitude: number): any
			static openAsync(latitude: number,longitude: number,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static openAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark): any
			static openAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static tryOpenAsync(location: Microsoft_Maui_Devices_Sensors_Location): any
			static tryOpenAsync(location: Microsoft_Maui_Devices_Sensors_Location,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static tryOpenAsync(latitude: number,longitude: number): any
			static tryOpenAsync(latitude: number,longitude: number,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static tryOpenAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark): any
			static tryOpenAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any

        }


    // Microsoft.Maui.ApplicationModel.MapExtensions
    export declare class Microsoft_Maui_ApplicationModel_MapExtensions  {
			static openAsync(map: Microsoft_Maui_ApplicationModel_IMap,location: Microsoft_Maui_Devices_Sensors_Location): any
			static openAsync(map: Microsoft_Maui_ApplicationModel_IMap,location: Microsoft_Maui_Devices_Sensors_Location,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static tryOpenAsync(map: Microsoft_Maui_ApplicationModel_IMap,location: Microsoft_Maui_Devices_Sensors_Location): any
			static tryOpenAsync(map: Microsoft_Maui_ApplicationModel_IMap,location: Microsoft_Maui_Devices_Sensors_Location,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static openAsync(map: Microsoft_Maui_ApplicationModel_IMap,latitude: number,longitude: number): any
			static openAsync(map: Microsoft_Maui_ApplicationModel_IMap,placemark: Microsoft_Maui_Devices_Sensors_Placemark): any
			static tryOpenAsync(map: Microsoft_Maui_ApplicationModel_IMap,latitude: number,longitude: number): any
			static tryOpenAsync(map: Microsoft_Maui_ApplicationModel_IMap,placemark: Microsoft_Maui_Devices_Sensors_Placemark): any

        }


    // Microsoft.Maui.ApplicationModel.MapLaunchOptions
    export declare class Microsoft_Maui_ApplicationModel_MapLaunchOptions  {
			get navigationMode(): Microsoft_Maui_ApplicationModel_NavigationMode
			set navigationMode(v: Microsoft_Maui_ApplicationModel_NavigationMode);
			get name(): string
			set name(v: string);

        }

export type Microsoft_Maui_ApplicationModel_NavigationMode = 
"None"
|"Default"
|"Bicycling"
|"Driving"
|"Transit"
|"Walking"
;

    // Microsoft.Maui.ApplicationModel.Permissions
    export declare class Microsoft_Maui_ApplicationModel_Permissions  {
			static checkStatusAsync(): any
			static requestAsync(): any
			static shouldShowRationale(): boolean

        }


    // Microsoft.Maui.ApplicationModel.Platform
    export declare class Microsoft_Maui_ApplicationModel_Platform  {

        }


    // Microsoft.Maui.ApplicationModel.PermissionException
    export declare class Microsoft_Maui_ApplicationModel_PermissionException  {

        }


    // Microsoft.Maui.ApplicationModel.FeatureNotSupportedException
    export declare class Microsoft_Maui_ApplicationModel_FeatureNotSupportedException  {

        }


    // Microsoft.Maui.ApplicationModel.FeatureNotEnabledException
    export declare class Microsoft_Maui_ApplicationModel_FeatureNotEnabledException  {

        }


    // Microsoft.Maui.ApplicationModel.IVersionTracking
    export declare class Microsoft_Maui_ApplicationModel_IVersionTracking  {
			get isFirstLaunchEver(): boolean
			get isFirstLaunchForCurrentVersion(): boolean
			get isFirstLaunchForCurrentBuild(): boolean
			get currentVersion(): string
			get currentBuild(): string
			get previousVersion(): string
			get previousBuild(): string
			get firstInstalledVersion(): string
			get firstInstalledBuild(): string
			get versionHistory(): any
			get buildHistory(): any
			track(): any
			isFirstLaunchForVersion(version: string): boolean
			isFirstLaunchForBuild(build: string): boolean

        }


    // Microsoft.Maui.ApplicationModel.VersionTracking
    export declare class Microsoft_Maui_ApplicationModel_VersionTracking  {
			static get isFirstLaunchEver(): boolean
			static get isFirstLaunchForCurrentVersion(): boolean
			static get isFirstLaunchForCurrentBuild(): boolean
			static get currentVersion(): string
			static get currentBuild(): string
			static get previousVersion(): string
			static get previousBuild(): string
			static get firstInstalledVersion(): string
			static get firstInstalledBuild(): string
			static get versionHistory(): any
			static get buildHistory(): any
			static get default(): Microsoft_Maui_ApplicationModel_IVersionTracking
			static track(): any
			static isFirstLaunchForVersion(version: string): boolean
			static isFirstLaunchForBuild(build: string): boolean

        }

export type Microsoft_Maui_ApplicationModel_PermissionStatus = 
"Unknown"
|"Denied"
|"Disabled"
|"Granted"
|"Restricted"
|"Limited"
;

    // Microsoft.Maui.ApplicationModel.Communication.IContacts
    export declare class Microsoft_Maui_ApplicationModel_Communication_IContacts  {
			pickContactAsync(): any
			getAllAsync(cancellationToken: any): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.Contacts
    export declare class Microsoft_Maui_ApplicationModel_Communication_Contacts  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IContacts
			static pickContactAsync(): any
			static getAllAsync(cancellationToken: any): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.IEmail
    export declare class Microsoft_Maui_ApplicationModel_Communication_IEmail  {
			get isComposeSupported(): boolean
			composeAsync(message: Microsoft_Maui_ApplicationModel_Communication_EmailMessage): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.EmailExtensions
    export declare class Microsoft_Maui_ApplicationModel_Communication_EmailExtensions  {
			static composeAsync(email: Microsoft_Maui_ApplicationModel_Communication_IEmail): any
			static composeAsync(email: Microsoft_Maui_ApplicationModel_Communication_IEmail,subject: string,body: string,to: any): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.Email
    export declare class Microsoft_Maui_ApplicationModel_Communication_Email  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IEmail
			static composeAsync(): any
			static composeAsync(subject: string,body: string,to: any): any
			static composeAsync(message: Microsoft_Maui_ApplicationModel_Communication_EmailMessage): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.EmailMessage
    export declare class Microsoft_Maui_ApplicationModel_Communication_EmailMessage  {
			get subject(): string
			set subject(v: string);
			get body(): string
			set body(v: string);
			get bodyFormat(): Microsoft_Maui_ApplicationModel_Communication_EmailBodyFormat
			set bodyFormat(v: Microsoft_Maui_ApplicationModel_Communication_EmailBodyFormat);
			get to(): any
			set to(v: any);
			get cc(): any
			set cc(v: any);
			get bcc(): any
			set bcc(v: any);
			get attachments(): any
			set attachments(v: any);

        }

export type Microsoft_Maui_ApplicationModel_Communication_EmailBodyFormat = 
"PlainText"
|"Html"
;

    // Microsoft.Maui.ApplicationModel.Communication.EmailAttachment
    export declare class Microsoft_Maui_ApplicationModel_Communication_EmailAttachment  {

        }


    // Microsoft.Maui.ApplicationModel.Communication.IPhoneDialer
    export declare class Microsoft_Maui_ApplicationModel_Communication_IPhoneDialer  {
			get isSupported(): boolean
			open(number: string): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.PhoneDialer
    export declare class Microsoft_Maui_ApplicationModel_Communication_PhoneDialer  {
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IPhoneDialer
			static open(number: string): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.ISms
    export declare class Microsoft_Maui_ApplicationModel_Communication_ISms  {
			get isComposeSupported(): boolean
			composeAsync(message: Microsoft_Maui_ApplicationModel_Communication_SmsMessage): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.Sms
    export declare class Microsoft_Maui_ApplicationModel_Communication_Sms  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_ISms
			static composeAsync(): any
			static composeAsync(message: Microsoft_Maui_ApplicationModel_Communication_SmsMessage): any

        }


    // Microsoft.Maui.ApplicationModel.Communication.SmsMessage
    export declare class Microsoft_Maui_ApplicationModel_Communication_SmsMessage  {
			get body(): string
			set body(v: string);
			get recipients(): any
			set recipients(v: any);

        }


    // Microsoft.Maui.ApplicationModel.Communication.Contact
    export declare class Microsoft_Maui_ApplicationModel_Communication_Contact  {
			get id(): string
			set id(v: string);
			get displayName(): string
			set displayName(v: string);
			get namePrefix(): string
			set namePrefix(v: string);
			get givenName(): string
			set givenName(v: string);
			get middleName(): string
			set middleName(v: string);
			get familyName(): string
			set familyName(v: string);
			get nameSuffix(): string
			set nameSuffix(v: string);
			get phones(): any
			set phones(v: any);
			get emails(): any
			set emails(v: any);
			toString(): string

        }


    // Microsoft.Maui.ApplicationModel.Communication.ContactEmail
    export declare class Microsoft_Maui_ApplicationModel_Communication_ContactEmail  {
			get emailAddress(): string
			set emailAddress(v: string);
			toString(): string

        }


    // Microsoft.Maui.ApplicationModel.Communication.ContactPhone
    export declare class Microsoft_Maui_ApplicationModel_Communication_ContactPhone  {
			get phoneNumber(): string
			set phoneNumber(v: string);
			toString(): string

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.IClipboard
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard  {
			get hasText(): boolean
			setTextAsync(text: string): any
			getTextAsync(): any

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.Clipboard
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_Clipboard  {
			static get hasText(): boolean
			static get default(): Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard
			static setTextAsync(text: string): any
			static getTextAsync(): any

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.IShare
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_IShare  {
			requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareTextRequest): any
			requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareFileRequest): any
			requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareMultipleFilesRequest): any

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.Share
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_Share  {
			static get default(): Microsoft_Maui_ApplicationModel_DataTransfer_IShare
			static requestAsync(text: string): any
			static requestAsync(text: string,title: string): any
			static requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareTextRequest): any
			static requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareFileRequest): any
			static requestAsync(request: Microsoft_Maui_ApplicationModel_DataTransfer_ShareMultipleFilesRequest): any

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareExtensions
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareExtensions  {
			static requestAsync(share: Microsoft_Maui_ApplicationModel_DataTransfer_IShare,text: string): any
			static requestAsync(share: Microsoft_Maui_ApplicationModel_DataTransfer_IShare,text: string,title: string): any

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareRequestBase
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareRequestBase  {
			get title(): string
			set title(v: string);
			get presentationSourceBounds(): any
			set presentationSourceBounds(v: any);

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareTextRequest
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareTextRequest  {
			get text(): string
			set text(v: string);
			get subject(): string
			set subject(v: string);
			get uri(): string
			set uri(v: string);

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareFileRequest
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareFileRequest  {
			get file(): Microsoft_Maui_ApplicationModel_DataTransfer_ShareFile
			set file(v: Microsoft_Maui_ApplicationModel_DataTransfer_ShareFile);

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareMultipleFilesRequest
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareMultipleFilesRequest  {
			get files(): any
			set files(v: any);

        }


    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareFile
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareFile  {

        }


    // Microsoft.Maui.Devices.IBattery
    export declare class Microsoft_Maui_Devices_IBattery  {
			get chargeLevel(): number
			get state(): Microsoft_Maui_Devices_BatteryState
			get powerSource(): Microsoft_Maui_Devices_BatteryPowerSource
			get energySaverStatus(): Microsoft_Maui_Devices_EnergySaverStatus

        }


    // Microsoft.Maui.Devices.Battery
    export declare class Microsoft_Maui_Devices_Battery  {
			static get chargeLevel(): number
			static get state(): Microsoft_Maui_Devices_BatteryState
			static get powerSource(): Microsoft_Maui_Devices_BatteryPowerSource
			static get energySaverStatus(): Microsoft_Maui_Devices_EnergySaverStatus
			static get default(): Microsoft_Maui_Devices_IBattery

        }

export type Microsoft_Maui_Devices_BatteryState = 
"Unknown"
|"Charging"
|"Discharging"
|"Full"
|"NotCharging"
|"NotPresent"
;
export type Microsoft_Maui_Devices_BatteryPowerSource = 
"Unknown"
|"Battery"
|"AC"
|"Usb"
|"Wireless"
;
export type Microsoft_Maui_Devices_EnergySaverStatus = 
"Unknown"
|"On"
|"Off"
;

    // Microsoft.Maui.Devices.BatteryInfoChangedEventArgs
    export declare class Microsoft_Maui_Devices_BatteryInfoChangedEventArgs  {
			get chargeLevel(): number
			get state(): Microsoft_Maui_Devices_BatteryState
			get powerSource(): Microsoft_Maui_Devices_BatteryPowerSource
			toString(): string

        }


    // Microsoft.Maui.Devices.EnergySaverStatusChangedEventArgs
    export declare class Microsoft_Maui_Devices_EnergySaverStatusChangedEventArgs  {
			get energySaverStatus(): Microsoft_Maui_Devices_EnergySaverStatus
			toString(): string

        }


    // Microsoft.Maui.Devices.IDeviceDisplay
    export declare class Microsoft_Maui_Devices_IDeviceDisplay  {
			get keepScreenOn(): boolean
			set keepScreenOn(v: boolean);
			get mainDisplayInfo(): Microsoft_Maui_Devices_DisplayInfo

        }


    // Microsoft.Maui.Devices.DisplayInfoChangedEventArgs
    export declare class Microsoft_Maui_Devices_DisplayInfoChangedEventArgs  {
			get displayInfo(): Microsoft_Maui_Devices_DisplayInfo

        }


    // Microsoft.Maui.Devices.DeviceDisplay
    export declare class Microsoft_Maui_Devices_DeviceDisplay  {
			static get keepScreenOn(): boolean
			static set keepScreenOn(v: boolean);
			static get mainDisplayInfo(): Microsoft_Maui_Devices_DisplayInfo
			static get current(): Microsoft_Maui_Devices_IDeviceDisplay

        }

export type Microsoft_Maui_Devices_DeviceType = 
"Unknown"
|"Physical"
|"Virtual"
;

    // Microsoft.Maui.Devices.IDeviceInfo
    export declare class Microsoft_Maui_Devices_IDeviceInfo  {
			get model(): string
			get manufacturer(): string
			get name(): string
			get versionString(): string
			get version(): any
			get platform(): Microsoft_Maui_Devices_DevicePlatform
			get idiom(): Microsoft_Maui_Devices_DeviceIdiom
			get deviceType(): Microsoft_Maui_Devices_DeviceType

        }


    // Microsoft.Maui.Devices.DeviceInfo
    export declare class Microsoft_Maui_Devices_DeviceInfo  {
			static get model(): string
			static get manufacturer(): string
			static get name(): string
			static get versionString(): string
			static get version(): any
			static get platform(): Microsoft_Maui_Devices_DevicePlatform
			static get idiom(): Microsoft_Maui_Devices_DeviceIdiom
			static get deviceType(): Microsoft_Maui_Devices_DeviceType
			static get current(): Microsoft_Maui_Devices_IDeviceInfo

        }


    // Microsoft.Maui.Devices.IFlashlight
    export declare class Microsoft_Maui_Devices_IFlashlight  {
			isSupportedAsync(): any
			turnOnAsync(): any
			turnOffAsync(): any

        }


    // Microsoft.Maui.Devices.Flashlight
    export declare class Microsoft_Maui_Devices_Flashlight  {
			static get default(): Microsoft_Maui_Devices_IFlashlight
			static isSupportedAsync(): any
			static turnOnAsync(): any
			static turnOffAsync(): any

        }


    // Microsoft.Maui.Devices.IHapticFeedback
    export declare class Microsoft_Maui_Devices_IHapticFeedback  {
			get isSupported(): boolean
			perform(type: Microsoft_Maui_Devices_HapticFeedbackType): any

        }


    // Microsoft.Maui.Devices.HapticFeedback
    export declare class Microsoft_Maui_Devices_HapticFeedback  {
			static get default(): Microsoft_Maui_Devices_IHapticFeedback
			static perform(type: Microsoft_Maui_Devices_HapticFeedbackType): any

        }

export type Microsoft_Maui_Devices_HapticFeedbackType = 
"Click"
|"LongPress"
;

    // Microsoft.Maui.Devices.DeviceIdiom
    export declare class Microsoft_Maui_Devices_DeviceIdiom  {
			static get phone(): Microsoft_Maui_Devices_DeviceIdiom
			static get tablet(): Microsoft_Maui_Devices_DeviceIdiom
			static get desktop(): Microsoft_Maui_Devices_DeviceIdiom
			static get tV(): Microsoft_Maui_Devices_DeviceIdiom
			static get watch(): Microsoft_Maui_Devices_DeviceIdiom
			static get unknown(): Microsoft_Maui_Devices_DeviceIdiom
			static create(deviceIdiom: string): Microsoft_Maui_Devices_DeviceIdiom
			equals(other: Microsoft_Maui_Devices_DeviceIdiom): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.DevicePlatform
    export declare class Microsoft_Maui_Devices_DevicePlatform  {
			static get android(): Microsoft_Maui_Devices_DevicePlatform
			static get iOS(): Microsoft_Maui_Devices_DevicePlatform
			static get macOS(): Microsoft_Maui_Devices_DevicePlatform
			static get macCatalyst(): Microsoft_Maui_Devices_DevicePlatform
			static get tvOS(): Microsoft_Maui_Devices_DevicePlatform
			static get tizen(): Microsoft_Maui_Devices_DevicePlatform
			static get uWP(): Microsoft_Maui_Devices_DevicePlatform
			static get winUI(): Microsoft_Maui_Devices_DevicePlatform
			static get watchOS(): Microsoft_Maui_Devices_DevicePlatform
			static get unknown(): Microsoft_Maui_Devices_DevicePlatform
			static create(devicePlatform: string): Microsoft_Maui_Devices_DevicePlatform
			equals(other: Microsoft_Maui_Devices_DevicePlatform): boolean
			equals(obj: any): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.DisplayInfo
    export declare class Microsoft_Maui_Devices_DisplayInfo  {
			get width(): number
			get height(): number
			get density(): number
			get orientation(): Microsoft_Maui_Devices_DisplayOrientation
			get rotation(): Microsoft_Maui_Devices_DisplayRotation
			get refreshRate(): number
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_DisplayInfo): boolean
			getHashCode(): number
			toString(): string

        }

export type Microsoft_Maui_Devices_DisplayOrientation = 
"Unknown"
|"Portrait"
|"Landscape"
;
export type Microsoft_Maui_Devices_DisplayRotation = 
"Unknown"
|"Rotation0"
|"Rotation90"
|"Rotation180"
|"Rotation270"
;

    // Microsoft.Maui.Devices.IVibration
    export declare class Microsoft_Maui_Devices_IVibration  {
			get isSupported(): boolean
			vibrate(): any
			vibrate(duration: any): any
			cancel(): any

        }


    // Microsoft.Maui.Devices.Vibration
    export declare class Microsoft_Maui_Devices_Vibration  {
			static get default(): Microsoft_Maui_Devices_IVibration
			static vibrate(): any
			static vibrate(duration: number): any
			static vibrate(duration: any): any
			static cancel(): any

        }


    // Microsoft.Maui.Devices.VibrationExtensions
    export declare class Microsoft_Maui_Devices_VibrationExtensions  {
			static vibrate(vibration: Microsoft_Maui_Devices_IVibration,duration: number): any

        }


    // Microsoft.Maui.Devices.Sensors.IAccelerometer
    export declare class Microsoft_Maui_Devices_Sensors_IAccelerometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.Accelerometer
    export declare class Microsoft_Maui_Devices_Sensors_Accelerometer  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IAccelerometer
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.AccelerometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_AccelerometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_AccelerometerData

        }


    // Microsoft.Maui.Devices.Sensors.AccelerometerData
    export declare class Microsoft_Maui_Devices_Sensors_AccelerometerData  {
			get acceleration(): any
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_AccelerometerData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.IBarometer
    export declare class Microsoft_Maui_Devices_Sensors_IBarometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.Barometer
    export declare class Microsoft_Maui_Devices_Sensors_Barometer  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IBarometer
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.BarometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_BarometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_BarometerData

        }


    // Microsoft.Maui.Devices.Sensors.BarometerData
    export declare class Microsoft_Maui_Devices_Sensors_BarometerData  {
			get pressureInHectopascals(): number
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_BarometerData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.ICompass
    export declare class Microsoft_Maui_Devices_Sensors_ICompass  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed,applyLowPassFilter: boolean): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.IPlatformCompass
    export declare class Microsoft_Maui_Devices_Sensors_IPlatformCompass  {

        }


    // Microsoft.Maui.Devices.Sensors.Compass
    export declare class Microsoft_Maui_Devices_Sensors_Compass  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_ICompass
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed,applyLowPassFilter: boolean): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.CompassExtensions
    export declare class Microsoft_Maui_Devices_Sensors_CompassExtensions  {

        }


    // Microsoft.Maui.Devices.Sensors.CompassChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_CompassChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_CompassData

        }


    // Microsoft.Maui.Devices.Sensors.CompassData
    export declare class Microsoft_Maui_Devices_Sensors_CompassData  {
			get headingMagneticNorth(): number
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_CompassData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.IGeocoding
    export declare class Microsoft_Maui_Devices_Sensors_IGeocoding  {
			getPlacemarksAsync(latitude: number,longitude: number): any
			getLocationsAsync(address: string): any

        }


    // Microsoft.Maui.Devices.Sensors.IPlatformGeocoding
    export declare class Microsoft_Maui_Devices_Sensors_IPlatformGeocoding  {

        }


    // Microsoft.Maui.Devices.Sensors.Geocoding
    export declare class Microsoft_Maui_Devices_Sensors_Geocoding  {
			static get default(): Microsoft_Maui_Devices_Sensors_IGeocoding
			static getPlacemarksAsync(location: Microsoft_Maui_Devices_Sensors_Location): any
			static getPlacemarksAsync(latitude: number,longitude: number): any
			static getLocationsAsync(address: string): any

        }


    // Microsoft.Maui.Devices.Sensors.GeocodingExtensions
    export declare class Microsoft_Maui_Devices_Sensors_GeocodingExtensions  {
			static getPlacemarksAsync(geocoding: Microsoft_Maui_Devices_Sensors_IGeocoding,location: Microsoft_Maui_Devices_Sensors_Location): any

        }


    // Microsoft.Maui.Devices.Sensors.IGeolocation
    export declare class Microsoft_Maui_Devices_Sensors_IGeolocation  {
			get isListeningForeground(): boolean
			getLastKnownLocationAsync(): any
			getLocationAsync(request: Microsoft_Maui_Devices_Sensors_GeolocationRequest,cancelToken: any): any
			startListeningForegroundAsync(request: Microsoft_Maui_Devices_Sensors_GeolocationListeningRequest): any
			stopListeningForeground(): any

        }


    // Microsoft.Maui.Devices.Sensors.Geolocation
    export declare class Microsoft_Maui_Devices_Sensors_Geolocation  {
			static get isListeningForeground(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IGeolocation
			static getLastKnownLocationAsync(): any
			static getLocationAsync(): any
			static getLocationAsync(request: Microsoft_Maui_Devices_Sensors_GeolocationRequest): any
			static getLocationAsync(request: Microsoft_Maui_Devices_Sensors_GeolocationRequest,cancelToken: any): any
			static startListeningForegroundAsync(request: Microsoft_Maui_Devices_Sensors_GeolocationListeningRequest): any
			static stopListeningForeground(): any

        }


    // Microsoft.Maui.Devices.Sensors.GeolocationExtensions
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationExtensions  {
			static getLocationAsync(geolocation: Microsoft_Maui_Devices_Sensors_IGeolocation): any
			static getLocationAsync(geolocation: Microsoft_Maui_Devices_Sensors_IGeolocation,request: Microsoft_Maui_Devices_Sensors_GeolocationRequest): any

        }

export type Microsoft_Maui_Devices_Sensors_GeolocationError = 
"PositionUnavailable"
|"Unauthorized"
;

    // Microsoft.Maui.Devices.Sensors.GeolocationListeningFailedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationListeningFailedEventArgs  {
			get error(): Microsoft_Maui_Devices_Sensors_GeolocationError

        }


    // Microsoft.Maui.Devices.Sensors.GeolocationListeningRequest
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationListeningRequest  {
			get minimumTime(): any
			set minimumTime(v: any);
			get desiredAccuracy(): Microsoft_Maui_Devices_Sensors_GeolocationAccuracy
			set desiredAccuracy(v: Microsoft_Maui_Devices_Sensors_GeolocationAccuracy);

        }


    // Microsoft.Maui.Devices.Sensors.GeolocationLocationChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationLocationChangedEventArgs  {
			get location(): Microsoft_Maui_Devices_Sensors_Location

        }

export type Microsoft_Maui_Devices_Sensors_GeolocationAccuracy = 
"Default"
|"Lowest"
|"Low"
|"Medium"
|"High"
|"Best"
;

    // Microsoft.Maui.Devices.Sensors.GeolocationRequest
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationRequest  {
			get timeout(): any
			set timeout(v: any);
			get desiredAccuracy(): Microsoft_Maui_Devices_Sensors_GeolocationAccuracy
			set desiredAccuracy(v: Microsoft_Maui_Devices_Sensors_GeolocationAccuracy);
			get requestFullAccuracy(): boolean
			set requestFullAccuracy(v: boolean);
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.IGyroscope
    export declare class Microsoft_Maui_Devices_Sensors_IGyroscope  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.Gyroscope
    export declare class Microsoft_Maui_Devices_Sensors_Gyroscope  {
			static get isMonitoring(): boolean
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IGyroscope
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.GyroscopeChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_GyroscopeChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_GyroscopeData

        }


    // Microsoft.Maui.Devices.Sensors.GyroscopeData
    export declare class Microsoft_Maui_Devices_Sensors_GyroscopeData  {
			get angularVelocity(): any
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_GyroscopeData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.IMagnetometer
    export declare class Microsoft_Maui_Devices_Sensors_IMagnetometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.Magnetometer
    export declare class Microsoft_Maui_Devices_Sensors_Magnetometer  {
			static get isMonitoring(): boolean
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IMagnetometer
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.MagnetometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_MagnetometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_MagnetometerData

        }


    // Microsoft.Maui.Devices.Sensors.MagnetometerData
    export declare class Microsoft_Maui_Devices_Sensors_MagnetometerData  {
			get magneticField(): any
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_MagnetometerData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.IOrientationSensor
    export declare class Microsoft_Maui_Devices_Sensors_IOrientationSensor  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.OrientationSensor
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensor  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static set isMonitoring(v: boolean);
			static get default(): Microsoft_Maui_Devices_Sensors_IOrientationSensor
			static start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			static stop(): any

        }


    // Microsoft.Maui.Devices.Sensors.OrientationSensorChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_OrientationSensorData

        }


    // Microsoft.Maui.Devices.Sensors.OrientationSensorData
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorData  {
			get orientation(): any
			equals(obj: any): boolean
			equals(other: Microsoft_Maui_Devices_Sensors_OrientationSensorData): boolean
			getHashCode(): number
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.OrientationSensorImplementation
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorImplementation  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			set isMonitoring(v: boolean);
			start(sensorSpeed: Microsoft_Maui_Devices_Sensors_SensorSpeed): any
			stop(): any

        }

export type Microsoft_Maui_Devices_Sensors_DistanceUnits = 
"Kilometers"
|"Miles"
;
export type Microsoft_Maui_Devices_Sensors_AltitudeReferenceSystem = 
"Unspecified"
|"Terrain"
|"Ellipsoid"
|"Geoid"
|"Surface"
;

    // Microsoft.Maui.Devices.Sensors.Location
    export declare class Microsoft_Maui_Devices_Sensors_Location  {
			get timestamp(): any
			set timestamp(v: any);
			get latitude(): number
			set latitude(v: number);
			get longitude(): number
			set longitude(v: number);
			get altitude(): number
			set altitude(v: number);
			get accuracy(): number
			set accuracy(v: number);
			get verticalAccuracy(): number
			set verticalAccuracy(v: number);
			get reducedAccuracy(): boolean
			set reducedAccuracy(v: boolean);
			get speed(): number
			set speed(v: number);
			get course(): number
			set course(v: number);
			get isFromMockProvider(): boolean
			set isFromMockProvider(v: boolean);
			get altitudeReferenceSystem(): Microsoft_Maui_Devices_Sensors_AltitudeReferenceSystem
			set altitudeReferenceSystem(v: Microsoft_Maui_Devices_Sensors_AltitudeReferenceSystem);
			static calculateDistance(latitudeStart: number,longitudeStart: number,locationEnd: Microsoft_Maui_Devices_Sensors_Location,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			static calculateDistance(locationStart: Microsoft_Maui_Devices_Sensors_Location,latitudeEnd: number,longitudeEnd: number,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			static calculateDistance(locationStart: Microsoft_Maui_Devices_Sensors_Location,locationEnd: Microsoft_Maui_Devices_Sensors_Location,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			static calculateDistance(latitudeStart: number,longitudeStart: number,latitudeEnd: number,longitudeEnd: number,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			toString(): string
			equals(obj: any): boolean
			getHashCode(): number

        }


    // Microsoft.Maui.Devices.Sensors.LocationExtensions
    export declare class Microsoft_Maui_Devices_Sensors_LocationExtensions  {
			static calculateDistance(locationStart: Microsoft_Maui_Devices_Sensors_Location,latitudeEnd: number,longitudeEnd: number,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			static calculateDistance(locationStart: Microsoft_Maui_Devices_Sensors_Location,locationEnd: Microsoft_Maui_Devices_Sensors_Location,units: Microsoft_Maui_Devices_Sensors_DistanceUnits): number
			static openMapsAsync(location: Microsoft_Maui_Devices_Sensors_Location,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static openMapsAsync(location: Microsoft_Maui_Devices_Sensors_Location): any

        }


    // Microsoft.Maui.Devices.Sensors.Placemark
    export declare class Microsoft_Maui_Devices_Sensors_Placemark  {
			get location(): Microsoft_Maui_Devices_Sensors_Location
			set location(v: Microsoft_Maui_Devices_Sensors_Location);
			get countryCode(): string
			set countryCode(v: string);
			get countryName(): string
			set countryName(v: string);
			get featureName(): string
			set featureName(v: string);
			get postalCode(): string
			set postalCode(v: string);
			get subLocality(): string
			set subLocality(v: string);
			get thoroughfare(): string
			set thoroughfare(v: string);
			get subThoroughfare(): string
			set subThoroughfare(v: string);
			get locality(): string
			set locality(v: string);
			get adminArea(): string
			set adminArea(v: string);
			get subAdminArea(): string
			set subAdminArea(v: string);
			toString(): string

        }


    // Microsoft.Maui.Devices.Sensors.PlacemarkExtensions
    export declare class Microsoft_Maui_Devices_Sensors_PlacemarkExtensions  {
			static openMapsAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark,options: Microsoft_Maui_ApplicationModel_MapLaunchOptions): any
			static openMapsAsync(placemark: Microsoft_Maui_Devices_Sensors_Placemark): any

        }

export type Microsoft_Maui_Devices_Sensors_SensorSpeed = 
"Default"
|"UI"
|"Game"
|"Fastest"
;

    // Microsoft.Maui.Authentication.Options
    export declare class Microsoft_Maui_Authentication_Options  {
			get includeFullNameScope(): boolean
			set includeFullNameScope(v: boolean);
			get includeEmailScope(): boolean
			set includeEmailScope(v: boolean);

        }


    // Microsoft.Maui.ApplicationModel.BasePermission
    export declare class Microsoft_Maui_ApplicationModel_BasePermission  {
			checkStatusAsync(): any
			requestAsync(): any
			ensureDeclared(): any
			shouldShowRationale(): boolean

        }


    // Microsoft.Maui.ApplicationModel.Battery
    export declare class Microsoft_Maui_ApplicationModel_Battery  {

        }


    // Microsoft.Maui.ApplicationModel.Bluetooth
    export declare class Microsoft_Maui_ApplicationModel_Bluetooth  {

        }


    // Microsoft.Maui.ApplicationModel.CalendarRead
    export declare class Microsoft_Maui_ApplicationModel_CalendarRead  {

        }


    // Microsoft.Maui.ApplicationModel.CalendarWrite
    export declare class Microsoft_Maui_ApplicationModel_CalendarWrite  {

        }


    // Microsoft.Maui.ApplicationModel.Camera
    export declare class Microsoft_Maui_ApplicationModel_Camera  {

        }


    // Microsoft.Maui.ApplicationModel.ContactsRead
    export declare class Microsoft_Maui_ApplicationModel_ContactsRead  {

        }


    // Microsoft.Maui.ApplicationModel.ContactsWrite
    export declare class Microsoft_Maui_ApplicationModel_ContactsWrite  {

        }


    // Microsoft.Maui.ApplicationModel.Flashlight
    export declare class Microsoft_Maui_ApplicationModel_Flashlight  {

        }


    // Microsoft.Maui.ApplicationModel.LaunchApp
    export declare class Microsoft_Maui_ApplicationModel_LaunchApp  {

        }


    // Microsoft.Maui.ApplicationModel.LocationWhenInUse
    export declare class Microsoft_Maui_ApplicationModel_LocationWhenInUse  {

        }


    // Microsoft.Maui.ApplicationModel.LocationAlways
    export declare class Microsoft_Maui_ApplicationModel_LocationAlways  {

        }


    // Microsoft.Maui.ApplicationModel.Maps
    export declare class Microsoft_Maui_ApplicationModel_Maps  {

        }


    // Microsoft.Maui.ApplicationModel.Media
    export declare class Microsoft_Maui_ApplicationModel_Media  {

        }


    // Microsoft.Maui.ApplicationModel.Microphone
    export declare class Microsoft_Maui_ApplicationModel_Microphone  {

        }


    // Microsoft.Maui.ApplicationModel.NearbyWifiDevices
    export declare class Microsoft_Maui_ApplicationModel_NearbyWifiDevices  {

        }


    // Microsoft.Maui.ApplicationModel.NetworkState
    export declare class Microsoft_Maui_ApplicationModel_NetworkState  {

        }


    // Microsoft.Maui.ApplicationModel.Phone
    export declare class Microsoft_Maui_ApplicationModel_Phone  {

        }


    // Microsoft.Maui.ApplicationModel.Photos
    export declare class Microsoft_Maui_ApplicationModel_Photos  {

        }


    // Microsoft.Maui.ApplicationModel.PhotosAddOnly
    export declare class Microsoft_Maui_ApplicationModel_PhotosAddOnly  {

        }


    // Microsoft.Maui.ApplicationModel.PostNotifications
    export declare class Microsoft_Maui_ApplicationModel_PostNotifications  {

        }


    // Microsoft.Maui.ApplicationModel.Reminders
    export declare class Microsoft_Maui_ApplicationModel_Reminders  {

        }


    // Microsoft.Maui.ApplicationModel.Sensors
    export declare class Microsoft_Maui_ApplicationModel_Sensors  {

        }


    // Microsoft.Maui.ApplicationModel.Sms
    export declare class Microsoft_Maui_ApplicationModel_Sms  {

        }


    // Microsoft.Maui.ApplicationModel.Speech
    export declare class Microsoft_Maui_ApplicationModel_Speech  {

        }


    // Microsoft.Maui.ApplicationModel.StorageRead
    export declare class Microsoft_Maui_ApplicationModel_StorageRead  {

        }


    // Microsoft.Maui.ApplicationModel.StorageWrite
    export declare class Microsoft_Maui_ApplicationModel_StorageWrite  {

        }


    // Microsoft.Maui.ApplicationModel.Vibrate
    export declare class Microsoft_Maui_ApplicationModel_Vibrate  {

        }


    // Microsoft.Maui.ApplicationModel.BasePlatformPermission
    export declare class Microsoft_Maui_ApplicationModel_BasePlatformPermission  {
			checkStatusAsync(): any
			requestAsync(): any
			ensureDeclared(): any
			shouldShowRationale(): boolean

        }



export default interface IMicrosoft_Maui_Essentials {
    Microsoft: {
        Maui: {
            Authentication: {
                IAppleSignInAuthenticator: typeof Microsoft_Maui_Authentication_IAppleSignInAuthenticator;
                AppleSignInAuthenticator: typeof Microsoft_Maui_Authentication_AppleSignInAuthenticator;
                IWebAuthenticator: typeof Microsoft_Maui_Authentication_IWebAuthenticator;
                IPlatformWebAuthenticatorCallback: typeof Microsoft_Maui_Authentication_IPlatformWebAuthenticatorCallback;
                IWebAuthenticatorResponseDecoder: typeof Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder;
                WebAuthenticator: typeof Microsoft_Maui_Authentication_WebAuthenticator;
                WebAuthenticatorExtensions: typeof Microsoft_Maui_Authentication_WebAuthenticatorExtensions;
                WebAuthenticatorOptions: typeof Microsoft_Maui_Authentication_WebAuthenticatorOptions;
                WebAuthenticatorResult: typeof Microsoft_Maui_Authentication_WebAuthenticatorResult;
                Options: typeof Microsoft_Maui_Authentication_Options;
            }
            Accessibility: {
                ISemanticScreenReader: typeof Microsoft_Maui_Accessibility_ISemanticScreenReader;
                SemanticScreenReader: typeof Microsoft_Maui_Accessibility_SemanticScreenReader;
            }
            Media: {
                IMediaPicker: typeof Microsoft_Maui_Media_IMediaPicker;
                MediaPicker: typeof Microsoft_Maui_Media_MediaPicker;
                MediaPickerOptions: typeof Microsoft_Maui_Media_MediaPickerOptions;
                IScreenshot: typeof Microsoft_Maui_Media_IScreenshot;
                IPlatformScreenshot: typeof Microsoft_Maui_Media_IPlatformScreenshot;
                IScreenshotResult: typeof Microsoft_Maui_Media_IScreenshotResult;
                Screenshot: typeof Microsoft_Maui_Media_Screenshot;
                ScreenshotExtensions: typeof Microsoft_Maui_Media_ScreenshotExtensions;
                ITextToSpeech: typeof Microsoft_Maui_Media_ITextToSpeech;
                TextToSpeech: typeof Microsoft_Maui_Media_TextToSpeech;
                Locale: typeof Microsoft_Maui_Media_Locale;
                SpeechOptions: typeof Microsoft_Maui_Media_SpeechOptions;
                UnitConverters: typeof Microsoft_Maui_Media_UnitConverters;
            }
            Storage: {
                IFilePicker: typeof Microsoft_Maui_Storage_IFilePicker;
                FilePicker: typeof Microsoft_Maui_Storage_FilePicker;
                FilePickerFileType: typeof Microsoft_Maui_Storage_FilePickerFileType;
                PickOptions: typeof Microsoft_Maui_Storage_PickOptions;
                IFileSystem: typeof Microsoft_Maui_Storage_IFileSystem;
                FileSystem: typeof Microsoft_Maui_Storage_FileSystem;
                FileSystemImplementation: typeof Microsoft_Maui_Storage_FileSystemImplementation;
                FileBase: typeof Microsoft_Maui_Storage_FileBase;
                ReadOnlyFile: typeof Microsoft_Maui_Storage_ReadOnlyFile;
                FileResult: typeof Microsoft_Maui_Storage_FileResult;
                IPreferences: typeof Microsoft_Maui_Storage_IPreferences;
                Preferences: typeof Microsoft_Maui_Storage_Preferences;
                ISecureStorage: typeof Microsoft_Maui_Storage_ISecureStorage;
                IPlatformSecureStorage: typeof Microsoft_Maui_Storage_IPlatformSecureStorage;
                SecureStorage: typeof Microsoft_Maui_Storage_SecureStorage;
                SecureStorageExtensions: typeof Microsoft_Maui_Storage_SecureStorageExtensions;
            }
            Networking: {
                IConnectivity: typeof Microsoft_Maui_Networking_IConnectivity;
                Connectivity: typeof Microsoft_Maui_Networking_Connectivity;
                ConnectivityChangedEventArgs: typeof Microsoft_Maui_Networking_ConnectivityChangedEventArgs;
            }
            ApplicationModel: {
                IAppActions: typeof Microsoft_Maui_ApplicationModel_IAppActions;
                IPlatformAppActions: typeof Microsoft_Maui_ApplicationModel_IPlatformAppActions;
                AppActions: typeof Microsoft_Maui_ApplicationModel_AppActions;
                AppActionsExtensions: typeof Microsoft_Maui_ApplicationModel_AppActionsExtensions;
                AppActionEventArgs: typeof Microsoft_Maui_ApplicationModel_AppActionEventArgs;
                AppAction: typeof Microsoft_Maui_ApplicationModel_AppAction;
                IAppInfo: typeof Microsoft_Maui_ApplicationModel_IAppInfo;
                AppInfo: typeof Microsoft_Maui_ApplicationModel_AppInfo;
                IBrowser: typeof Microsoft_Maui_ApplicationModel_IBrowser;
                Browser: typeof Microsoft_Maui_ApplicationModel_Browser;
                BrowserExtensions: typeof Microsoft_Maui_ApplicationModel_BrowserExtensions;
                BrowserLaunchOptions: typeof Microsoft_Maui_ApplicationModel_BrowserLaunchOptions;
                ILauncher: typeof Microsoft_Maui_ApplicationModel_ILauncher;
                Launcher: typeof Microsoft_Maui_ApplicationModel_Launcher;
                LauncherExtensions: typeof Microsoft_Maui_ApplicationModel_LauncherExtensions;
                OpenFileRequest: typeof Microsoft_Maui_ApplicationModel_OpenFileRequest;
                MainThread: typeof Microsoft_Maui_ApplicationModel_MainThread;
                IMap: typeof Microsoft_Maui_ApplicationModel_IMap;
                Map: typeof Microsoft_Maui_ApplicationModel_Map;
                MapExtensions: typeof Microsoft_Maui_ApplicationModel_MapExtensions;
                MapLaunchOptions: typeof Microsoft_Maui_ApplicationModel_MapLaunchOptions;
                Permissions: typeof Microsoft_Maui_ApplicationModel_Permissions;
                Platform: typeof Microsoft_Maui_ApplicationModel_Platform;
                PermissionException: typeof Microsoft_Maui_ApplicationModel_PermissionException;
                FeatureNotSupportedException: typeof Microsoft_Maui_ApplicationModel_FeatureNotSupportedException;
                FeatureNotEnabledException: typeof Microsoft_Maui_ApplicationModel_FeatureNotEnabledException;
                IVersionTracking: typeof Microsoft_Maui_ApplicationModel_IVersionTracking;
                VersionTracking: typeof Microsoft_Maui_ApplicationModel_VersionTracking;
                Communication: {
                    IContacts: typeof Microsoft_Maui_ApplicationModel_Communication_IContacts;
                    Contacts: typeof Microsoft_Maui_ApplicationModel_Communication_Contacts;
                    IEmail: typeof Microsoft_Maui_ApplicationModel_Communication_IEmail;
                    EmailExtensions: typeof Microsoft_Maui_ApplicationModel_Communication_EmailExtensions;
                    Email: typeof Microsoft_Maui_ApplicationModel_Communication_Email;
                    EmailMessage: typeof Microsoft_Maui_ApplicationModel_Communication_EmailMessage;
                    EmailAttachment: typeof Microsoft_Maui_ApplicationModel_Communication_EmailAttachment;
                    IPhoneDialer: typeof Microsoft_Maui_ApplicationModel_Communication_IPhoneDialer;
                    PhoneDialer: typeof Microsoft_Maui_ApplicationModel_Communication_PhoneDialer;
                    ISms: typeof Microsoft_Maui_ApplicationModel_Communication_ISms;
                    Sms: typeof Microsoft_Maui_ApplicationModel_Communication_Sms;
                    SmsMessage: typeof Microsoft_Maui_ApplicationModel_Communication_SmsMessage;
                    Contact: typeof Microsoft_Maui_ApplicationModel_Communication_Contact;
                    ContactEmail: typeof Microsoft_Maui_ApplicationModel_Communication_ContactEmail;
                    ContactPhone: typeof Microsoft_Maui_ApplicationModel_Communication_ContactPhone;
                }
                DataTransfer: {
                    IClipboard: typeof Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard;
                    Clipboard: typeof Microsoft_Maui_ApplicationModel_DataTransfer_Clipboard;
                    IShare: typeof Microsoft_Maui_ApplicationModel_DataTransfer_IShare;
                    Share: typeof Microsoft_Maui_ApplicationModel_DataTransfer_Share;
                    ShareExtensions: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareExtensions;
                    ShareRequestBase: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareRequestBase;
                    ShareTextRequest: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareTextRequest;
                    ShareFileRequest: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareFileRequest;
                    ShareMultipleFilesRequest: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareMultipleFilesRequest;
                    ShareFile: typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareFile;
                }
                BasePermission: typeof Microsoft_Maui_ApplicationModel_BasePermission;
                Battery: typeof Microsoft_Maui_ApplicationModel_Battery;
                Bluetooth: typeof Microsoft_Maui_ApplicationModel_Bluetooth;
                CalendarRead: typeof Microsoft_Maui_ApplicationModel_CalendarRead;
                CalendarWrite: typeof Microsoft_Maui_ApplicationModel_CalendarWrite;
                Camera: typeof Microsoft_Maui_ApplicationModel_Camera;
                ContactsRead: typeof Microsoft_Maui_ApplicationModel_ContactsRead;
                ContactsWrite: typeof Microsoft_Maui_ApplicationModel_ContactsWrite;
                Flashlight: typeof Microsoft_Maui_ApplicationModel_Flashlight;
                LaunchApp: typeof Microsoft_Maui_ApplicationModel_LaunchApp;
                LocationWhenInUse: typeof Microsoft_Maui_ApplicationModel_LocationWhenInUse;
                LocationAlways: typeof Microsoft_Maui_ApplicationModel_LocationAlways;
                Maps: typeof Microsoft_Maui_ApplicationModel_Maps;
                Media: typeof Microsoft_Maui_ApplicationModel_Media;
                Microphone: typeof Microsoft_Maui_ApplicationModel_Microphone;
                NearbyWifiDevices: typeof Microsoft_Maui_ApplicationModel_NearbyWifiDevices;
                NetworkState: typeof Microsoft_Maui_ApplicationModel_NetworkState;
                Phone: typeof Microsoft_Maui_ApplicationModel_Phone;
                Photos: typeof Microsoft_Maui_ApplicationModel_Photos;
                PhotosAddOnly: typeof Microsoft_Maui_ApplicationModel_PhotosAddOnly;
                PostNotifications: typeof Microsoft_Maui_ApplicationModel_PostNotifications;
                Reminders: typeof Microsoft_Maui_ApplicationModel_Reminders;
                Sensors: typeof Microsoft_Maui_ApplicationModel_Sensors;
                Sms: typeof Microsoft_Maui_ApplicationModel_Sms;
                Speech: typeof Microsoft_Maui_ApplicationModel_Speech;
                StorageRead: typeof Microsoft_Maui_ApplicationModel_StorageRead;
                StorageWrite: typeof Microsoft_Maui_ApplicationModel_StorageWrite;
                Vibrate: typeof Microsoft_Maui_ApplicationModel_Vibrate;
                BasePlatformPermission: typeof Microsoft_Maui_ApplicationModel_BasePlatformPermission;
            }
            Devices: {
                IBattery: typeof Microsoft_Maui_Devices_IBattery;
                Battery: typeof Microsoft_Maui_Devices_Battery;
                BatteryInfoChangedEventArgs: typeof Microsoft_Maui_Devices_BatteryInfoChangedEventArgs;
                EnergySaverStatusChangedEventArgs: typeof Microsoft_Maui_Devices_EnergySaverStatusChangedEventArgs;
                IDeviceDisplay: typeof Microsoft_Maui_Devices_IDeviceDisplay;
                DisplayInfoChangedEventArgs: typeof Microsoft_Maui_Devices_DisplayInfoChangedEventArgs;
                DeviceDisplay: typeof Microsoft_Maui_Devices_DeviceDisplay;
                IDeviceInfo: typeof Microsoft_Maui_Devices_IDeviceInfo;
                DeviceInfo: typeof Microsoft_Maui_Devices_DeviceInfo;
                IFlashlight: typeof Microsoft_Maui_Devices_IFlashlight;
                Flashlight: typeof Microsoft_Maui_Devices_Flashlight;
                IHapticFeedback: typeof Microsoft_Maui_Devices_IHapticFeedback;
                HapticFeedback: typeof Microsoft_Maui_Devices_HapticFeedback;
                DeviceIdiom: typeof Microsoft_Maui_Devices_DeviceIdiom;
                DevicePlatform: typeof Microsoft_Maui_Devices_DevicePlatform;
                DisplayInfo: typeof Microsoft_Maui_Devices_DisplayInfo;
                IVibration: typeof Microsoft_Maui_Devices_IVibration;
                Vibration: typeof Microsoft_Maui_Devices_Vibration;
                VibrationExtensions: typeof Microsoft_Maui_Devices_VibrationExtensions;
                Sensors: {
                    IAccelerometer: typeof Microsoft_Maui_Devices_Sensors_IAccelerometer;
                    Accelerometer: typeof Microsoft_Maui_Devices_Sensors_Accelerometer;
                    AccelerometerChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_AccelerometerChangedEventArgs;
                    AccelerometerData: typeof Microsoft_Maui_Devices_Sensors_AccelerometerData;
                    IBarometer: typeof Microsoft_Maui_Devices_Sensors_IBarometer;
                    Barometer: typeof Microsoft_Maui_Devices_Sensors_Barometer;
                    BarometerChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_BarometerChangedEventArgs;
                    BarometerData: typeof Microsoft_Maui_Devices_Sensors_BarometerData;
                    ICompass: typeof Microsoft_Maui_Devices_Sensors_ICompass;
                    IPlatformCompass: typeof Microsoft_Maui_Devices_Sensors_IPlatformCompass;
                    Compass: typeof Microsoft_Maui_Devices_Sensors_Compass;
                    CompassExtensions: typeof Microsoft_Maui_Devices_Sensors_CompassExtensions;
                    CompassChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_CompassChangedEventArgs;
                    CompassData: typeof Microsoft_Maui_Devices_Sensors_CompassData;
                    IGeocoding: typeof Microsoft_Maui_Devices_Sensors_IGeocoding;
                    IPlatformGeocoding: typeof Microsoft_Maui_Devices_Sensors_IPlatformGeocoding;
                    Geocoding: typeof Microsoft_Maui_Devices_Sensors_Geocoding;
                    GeocodingExtensions: typeof Microsoft_Maui_Devices_Sensors_GeocodingExtensions;
                    IGeolocation: typeof Microsoft_Maui_Devices_Sensors_IGeolocation;
                    Geolocation: typeof Microsoft_Maui_Devices_Sensors_Geolocation;
                    GeolocationExtensions: typeof Microsoft_Maui_Devices_Sensors_GeolocationExtensions;
                    GeolocationListeningFailedEventArgs: typeof Microsoft_Maui_Devices_Sensors_GeolocationListeningFailedEventArgs;
                    GeolocationListeningRequest: typeof Microsoft_Maui_Devices_Sensors_GeolocationListeningRequest;
                    GeolocationLocationChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_GeolocationLocationChangedEventArgs;
                    GeolocationRequest: typeof Microsoft_Maui_Devices_Sensors_GeolocationRequest;
                    IGyroscope: typeof Microsoft_Maui_Devices_Sensors_IGyroscope;
                    Gyroscope: typeof Microsoft_Maui_Devices_Sensors_Gyroscope;
                    GyroscopeChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_GyroscopeChangedEventArgs;
                    GyroscopeData: typeof Microsoft_Maui_Devices_Sensors_GyroscopeData;
                    IMagnetometer: typeof Microsoft_Maui_Devices_Sensors_IMagnetometer;
                    Magnetometer: typeof Microsoft_Maui_Devices_Sensors_Magnetometer;
                    MagnetometerChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_MagnetometerChangedEventArgs;
                    MagnetometerData: typeof Microsoft_Maui_Devices_Sensors_MagnetometerData;
                    IOrientationSensor: typeof Microsoft_Maui_Devices_Sensors_IOrientationSensor;
                    OrientationSensor: typeof Microsoft_Maui_Devices_Sensors_OrientationSensor;
                    OrientationSensorChangedEventArgs: typeof Microsoft_Maui_Devices_Sensors_OrientationSensorChangedEventArgs;
                    OrientationSensorData: typeof Microsoft_Maui_Devices_Sensors_OrientationSensorData;
                    OrientationSensorImplementation: typeof Microsoft_Maui_Devices_Sensors_OrientationSensorImplementation;
                    Location: typeof Microsoft_Maui_Devices_Sensors_Location;
                    LocationExtensions: typeof Microsoft_Maui_Devices_Sensors_LocationExtensions;
                    Placemark: typeof Microsoft_Maui_Devices_Sensors_Placemark;
                    PlacemarkExtensions: typeof Microsoft_Maui_Devices_Sensors_PlacemarkExtensions;
                }
            }
        }
    }
}



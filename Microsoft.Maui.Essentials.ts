
    // Microsoft.Maui.Authentication.IAppleSignInAuthenticator
    export declare class Microsoft_Maui_Authentication_IAppleSignInAuthenticator  {

        }

                

    // Microsoft.Maui.Authentication.AppleSignInAuthenticator
    export declare class Microsoft_Maui_Authentication_AppleSignInAuthenticator  {
			static get default(): Microsoft_Maui_Authentication_IAppleSignInAuthenticator

        }

                

    // Microsoft.Maui.Authentication.IWebAuthenticator
    export declare class Microsoft_Maui_Authentication_IWebAuthenticator  {

        }

                

    // Microsoft.Maui.Authentication.IPlatformWebAuthenticatorCallback
    export declare class Microsoft_Maui_Authentication_IPlatformWebAuthenticatorCallback  {

        }

                

    // Microsoft.Maui.Authentication.IWebAuthenticatorResponseDecoder
    export declare class Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder  {

        }

                

    // Microsoft.Maui.Authentication.WebAuthenticator
    export declare class Microsoft_Maui_Authentication_WebAuthenticator  {
			static get default(): Microsoft_Maui_Authentication_IWebAuthenticator

        }

                

    // Microsoft.Maui.Authentication.WebAuthenticatorExtensions
    export declare class Microsoft_Maui_Authentication_WebAuthenticatorExtensions  {

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

        }

                

    // Microsoft.Maui.Accessibility.ISemanticScreenReader
    export declare class Microsoft_Maui_Accessibility_ISemanticScreenReader  {

        }

                

    // Microsoft.Maui.Accessibility.SemanticScreenReader
    export declare class Microsoft_Maui_Accessibility_SemanticScreenReader  {
			static get default(): Microsoft_Maui_Accessibility_ISemanticScreenReader

        }

                

    // Microsoft.Maui.Media.IMediaPicker
    export declare class Microsoft_Maui_Media_IMediaPicker  {
			get isCaptureSupported(): boolean

        }

                

    // Microsoft.Maui.Media.MediaPicker
    export declare class Microsoft_Maui_Media_MediaPicker  {
			static get isCaptureSupported(): boolean
			static get default(): Microsoft_Maui_Media_IMediaPicker

        }

                

    // Microsoft.Maui.Media.MediaPickerOptions
    export declare class Microsoft_Maui_Media_MediaPickerOptions  {
			get title(): string
			set title(v: string);

        }

                

    // Microsoft.Maui.Media.IScreenshot
    export declare class Microsoft_Maui_Media_IScreenshot  {
			get isCaptureSupported(): boolean

        }

                

    // Microsoft.Maui.Media.IPlatformScreenshot
    export declare class Microsoft_Maui_Media_IPlatformScreenshot  {

        }

                

    // Microsoft.Maui.Media.IScreenshotResult
    export declare class Microsoft_Maui_Media_IScreenshotResult  {
			get width(): number
			get height(): number

        }

                

    // Microsoft.Maui.Media.Screenshot
    export declare class Microsoft_Maui_Media_Screenshot  {
			static get isCaptureSupported(): boolean
			static get default(): Microsoft_Maui_Media_IScreenshot

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

        }

                

    // Microsoft.Maui.Media.TextToSpeech
    export declare class Microsoft_Maui_Media_TextToSpeech  {
			static get default(): Microsoft_Maui_Media_ITextToSpeech

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

        }

                

    // Microsoft.Maui.Storage.IFilePicker
    export declare class Microsoft_Maui_Storage_IFilePicker  {

        }

                

    // Microsoft.Maui.Storage.FilePicker
    export declare class Microsoft_Maui_Storage_FilePicker  {
			static get default(): Microsoft_Maui_Storage_IFilePicker

        }

                

    // Microsoft.Maui.Storage.FilePickerFileType
    export declare class Microsoft_Maui_Storage_FilePickerFileType  {
			get value(): any

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

        }

                

    // Microsoft.Maui.Storage.FileSystem
    export declare class Microsoft_Maui_Storage_FileSystem  {
			static get cacheDirectory(): string
			static get appDataDirectory(): string
			static get current(): Microsoft_Maui_Storage_IFileSystem

        }

                

    // Microsoft.Maui.Storage.FileSystemImplementation
    export declare class Microsoft_Maui_Storage_FileSystemImplementation  {
			get cacheDirectory(): string
			get appDataDirectory(): string

        }

                

    // Microsoft.Maui.Storage.FileBase
    export declare class Microsoft_Maui_Storage_FileBase  {
			get fullPath(): string
			set fullPath(v: string);
			get contentType(): string
			set contentType(v: string);
			get fileName(): string
			set fileName(v: string);

        }

                

    // Microsoft.Maui.Storage.ReadOnlyFile
    export declare class Microsoft_Maui_Storage_ReadOnlyFile  {

        }

                

    // Microsoft.Maui.Storage.FileResult
    export declare class Microsoft_Maui_Storage_FileResult  {

        }

                

    // Microsoft.Maui.Storage.IPreferences
    export declare class Microsoft_Maui_Storage_IPreferences  {

        }

                

    // Microsoft.Maui.Storage.Preferences
    export declare class Microsoft_Maui_Storage_Preferences  {
			static get default(): Microsoft_Maui_Storage_IPreferences

        }

                

    // Microsoft.Maui.Storage.ISecureStorage
    export declare class Microsoft_Maui_Storage_ISecureStorage  {

        }

                

    // Microsoft.Maui.Storage.IPlatformSecureStorage
    export declare class Microsoft_Maui_Storage_IPlatformSecureStorage  {

        }

                

    // Microsoft.Maui.Storage.SecureStorage
    export declare class Microsoft_Maui_Storage_SecureStorage  {
			static get default(): Microsoft_Maui_Storage_ISecureStorage

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

        }

                

    // Microsoft.Maui.ApplicationModel.IPlatformAppActions
    export declare class Microsoft_Maui_ApplicationModel_IPlatformAppActions  {

        }

                

    // Microsoft.Maui.ApplicationModel.AppActions
    export declare class Microsoft_Maui_ApplicationModel_AppActions  {
			static get isSupported(): boolean
			static get current(): Microsoft_Maui_ApplicationModel_IAppActions

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

        }

                

    // Microsoft.Maui.ApplicationModel.Browser
    export declare class Microsoft_Maui_ApplicationModel_Browser  {
			static get default(): Microsoft_Maui_ApplicationModel_IBrowser

        }

                

    // Microsoft.Maui.ApplicationModel.BrowserExtensions
    export declare class Microsoft_Maui_ApplicationModel_BrowserExtensions  {

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

        }

                

    // Microsoft.Maui.ApplicationModel.Launcher
    export declare class Microsoft_Maui_ApplicationModel_Launcher  {
			static get default(): Microsoft_Maui_ApplicationModel_ILauncher

        }

                

    // Microsoft.Maui.ApplicationModel.LauncherExtensions
    export declare class Microsoft_Maui_ApplicationModel_LauncherExtensions  {

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

        }

                

    // Microsoft.Maui.ApplicationModel.IMap
    export declare class Microsoft_Maui_ApplicationModel_IMap  {

        }

                

    // Microsoft.Maui.ApplicationModel.Map
    export declare class Microsoft_Maui_ApplicationModel_Map  {
			static get default(): Microsoft_Maui_ApplicationModel_IMap

        }

                

    // Microsoft.Maui.ApplicationModel.MapExtensions
    export declare class Microsoft_Maui_ApplicationModel_MapExtensions  {

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

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.Contacts
    export declare class Microsoft_Maui_ApplicationModel_Communication_Contacts  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IContacts

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.IEmail
    export declare class Microsoft_Maui_ApplicationModel_Communication_IEmail  {
			get isComposeSupported(): boolean

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.EmailExtensions
    export declare class Microsoft_Maui_ApplicationModel_Communication_EmailExtensions  {

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.Email
    export declare class Microsoft_Maui_ApplicationModel_Communication_Email  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IEmail

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

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.PhoneDialer
    export declare class Microsoft_Maui_ApplicationModel_Communication_PhoneDialer  {
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_ApplicationModel_Communication_IPhoneDialer

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.ISms
    export declare class Microsoft_Maui_ApplicationModel_Communication_ISms  {
			get isComposeSupported(): boolean

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.Sms
    export declare class Microsoft_Maui_ApplicationModel_Communication_Sms  {
			static get default(): Microsoft_Maui_ApplicationModel_Communication_ISms

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

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.ContactEmail
    export declare class Microsoft_Maui_ApplicationModel_Communication_ContactEmail  {
			get emailAddress(): string
			set emailAddress(v: string);

        }

                

    // Microsoft.Maui.ApplicationModel.Communication.ContactPhone
    export declare class Microsoft_Maui_ApplicationModel_Communication_ContactPhone  {
			get phoneNumber(): string
			set phoneNumber(v: string);

        }

                

    // Microsoft.Maui.ApplicationModel.DataTransfer.IClipboard
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard  {
			get hasText(): boolean

        }

                

    // Microsoft.Maui.ApplicationModel.DataTransfer.Clipboard
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_Clipboard  {
			static get hasText(): boolean
			static get default(): Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard

        }

                

    // Microsoft.Maui.ApplicationModel.DataTransfer.IShare
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_IShare  {

        }

                

    // Microsoft.Maui.ApplicationModel.DataTransfer.Share
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_Share  {
			static get default(): Microsoft_Maui_ApplicationModel_DataTransfer_IShare

        }

                

    // Microsoft.Maui.ApplicationModel.DataTransfer.ShareExtensions
    export declare class Microsoft_Maui_ApplicationModel_DataTransfer_ShareExtensions  {

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

        }

                

    // Microsoft.Maui.Devices.EnergySaverStatusChangedEventArgs
    export declare class Microsoft_Maui_Devices_EnergySaverStatusChangedEventArgs  {
			get energySaverStatus(): Microsoft_Maui_Devices_EnergySaverStatus

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

        }

                

    // Microsoft.Maui.Devices.Flashlight
    export declare class Microsoft_Maui_Devices_Flashlight  {
			static get default(): Microsoft_Maui_Devices_IFlashlight

        }

                

    // Microsoft.Maui.Devices.IHapticFeedback
    export declare class Microsoft_Maui_Devices_IHapticFeedback  {
			get isSupported(): boolean

        }

                

    // Microsoft.Maui.Devices.HapticFeedback
    export declare class Microsoft_Maui_Devices_HapticFeedback  {
			static get default(): Microsoft_Maui_Devices_IHapticFeedback

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

        }

                

    // Microsoft.Maui.Devices.DisplayInfo
    export declare class Microsoft_Maui_Devices_DisplayInfo  {
			get width(): number
			get height(): number
			get density(): number
			get orientation(): Microsoft_Maui_Devices_DisplayOrientation
			get rotation(): Microsoft_Maui_Devices_DisplayRotation
			get refreshRate(): number

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

        }

                

    // Microsoft.Maui.Devices.Vibration
    export declare class Microsoft_Maui_Devices_Vibration  {
			static get default(): Microsoft_Maui_Devices_IVibration

        }

                

    // Microsoft.Maui.Devices.VibrationExtensions
    export declare class Microsoft_Maui_Devices_VibrationExtensions  {

        }

                

    // Microsoft.Maui.Devices.Sensors.IAccelerometer
    export declare class Microsoft_Maui_Devices_Sensors_IAccelerometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.Accelerometer
    export declare class Microsoft_Maui_Devices_Sensors_Accelerometer  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IAccelerometer

        }

                

    // Microsoft.Maui.Devices.Sensors.AccelerometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_AccelerometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_AccelerometerData

        }

                

    // Microsoft.Maui.Devices.Sensors.AccelerometerData
    export declare class Microsoft_Maui_Devices_Sensors_AccelerometerData  {
			get acceleration(): any

        }

                

    // Microsoft.Maui.Devices.Sensors.IBarometer
    export declare class Microsoft_Maui_Devices_Sensors_IBarometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.Barometer
    export declare class Microsoft_Maui_Devices_Sensors_Barometer  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IBarometer

        }

                

    // Microsoft.Maui.Devices.Sensors.BarometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_BarometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_BarometerData

        }

                

    // Microsoft.Maui.Devices.Sensors.BarometerData
    export declare class Microsoft_Maui_Devices_Sensors_BarometerData  {
			get pressureInHectopascals(): number

        }

                

    // Microsoft.Maui.Devices.Sensors.ICompass
    export declare class Microsoft_Maui_Devices_Sensors_ICompass  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.IPlatformCompass
    export declare class Microsoft_Maui_Devices_Sensors_IPlatformCompass  {

        }

                

    // Microsoft.Maui.Devices.Sensors.Compass
    export declare class Microsoft_Maui_Devices_Sensors_Compass  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_ICompass

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

        }

                

    // Microsoft.Maui.Devices.Sensors.IGeocoding
    export declare class Microsoft_Maui_Devices_Sensors_IGeocoding  {

        }

                

    // Microsoft.Maui.Devices.Sensors.IPlatformGeocoding
    export declare class Microsoft_Maui_Devices_Sensors_IPlatformGeocoding  {

        }

                

    // Microsoft.Maui.Devices.Sensors.Geocoding
    export declare class Microsoft_Maui_Devices_Sensors_Geocoding  {
			static get default(): Microsoft_Maui_Devices_Sensors_IGeocoding

        }

                

    // Microsoft.Maui.Devices.Sensors.GeocodingExtensions
    export declare class Microsoft_Maui_Devices_Sensors_GeocodingExtensions  {

        }

                

    // Microsoft.Maui.Devices.Sensors.IGeolocation
    export declare class Microsoft_Maui_Devices_Sensors_IGeolocation  {
			get isListeningForeground(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.Geolocation
    export declare class Microsoft_Maui_Devices_Sensors_Geolocation  {
			static get isListeningForeground(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IGeolocation

        }

                

    // Microsoft.Maui.Devices.Sensors.GeolocationExtensions
    export declare class Microsoft_Maui_Devices_Sensors_GeolocationExtensions  {

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

        }

                

    // Microsoft.Maui.Devices.Sensors.IGyroscope
    export declare class Microsoft_Maui_Devices_Sensors_IGyroscope  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.Gyroscope
    export declare class Microsoft_Maui_Devices_Sensors_Gyroscope  {
			static get isMonitoring(): boolean
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IGyroscope

        }

                

    // Microsoft.Maui.Devices.Sensors.GyroscopeChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_GyroscopeChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_GyroscopeData

        }

                

    // Microsoft.Maui.Devices.Sensors.GyroscopeData
    export declare class Microsoft_Maui_Devices_Sensors_GyroscopeData  {
			get angularVelocity(): any

        }

                

    // Microsoft.Maui.Devices.Sensors.IMagnetometer
    export declare class Microsoft_Maui_Devices_Sensors_IMagnetometer  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.Magnetometer
    export declare class Microsoft_Maui_Devices_Sensors_Magnetometer  {
			static get isMonitoring(): boolean
			static get isSupported(): boolean
			static get default(): Microsoft_Maui_Devices_Sensors_IMagnetometer

        }

                

    // Microsoft.Maui.Devices.Sensors.MagnetometerChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_MagnetometerChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_MagnetometerData

        }

                

    // Microsoft.Maui.Devices.Sensors.MagnetometerData
    export declare class Microsoft_Maui_Devices_Sensors_MagnetometerData  {
			get magneticField(): any

        }

                

    // Microsoft.Maui.Devices.Sensors.IOrientationSensor
    export declare class Microsoft_Maui_Devices_Sensors_IOrientationSensor  {
			get isSupported(): boolean
			get isMonitoring(): boolean

        }

                

    // Microsoft.Maui.Devices.Sensors.OrientationSensor
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensor  {
			static get isSupported(): boolean
			static get isMonitoring(): boolean
			static set isMonitoring(v: boolean);
			static get default(): Microsoft_Maui_Devices_Sensors_IOrientationSensor

        }

                

    // Microsoft.Maui.Devices.Sensors.OrientationSensorChangedEventArgs
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorChangedEventArgs  {
			get reading(): Microsoft_Maui_Devices_Sensors_OrientationSensorData

        }

                

    // Microsoft.Maui.Devices.Sensors.OrientationSensorData
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorData  {
			get orientation(): any

        }

                

    // Microsoft.Maui.Devices.Sensors.OrientationSensorImplementation
    export declare class Microsoft_Maui_Devices_Sensors_OrientationSensorImplementation  {
			get isSupported(): boolean
			get isMonitoring(): boolean
			set isMonitoring(v: boolean);

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

        }

                

    // Microsoft.Maui.Devices.Sensors.LocationExtensions
    export declare class Microsoft_Maui_Devices_Sensors_LocationExtensions  {

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

        }

                

    // Microsoft.Maui.Devices.Sensors.PlacemarkExtensions
    export declare class Microsoft_Maui_Devices_Sensors_PlacemarkExtensions  {

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

        }

                


export interface IMicrosoft_Maui_Essentials {
	"Microsoft.Maui.Authentication.IAppleSignInAuthenticator": typeof Microsoft_Maui_Authentication_IAppleSignInAuthenticator
	"Microsoft.Maui.Authentication.AppleSignInAuthenticator": typeof Microsoft_Maui_Authentication_AppleSignInAuthenticator
	"Microsoft.Maui.Authentication.IWebAuthenticator": typeof Microsoft_Maui_Authentication_IWebAuthenticator
	"Microsoft.Maui.Authentication.IPlatformWebAuthenticatorCallback": typeof Microsoft_Maui_Authentication_IPlatformWebAuthenticatorCallback
	"Microsoft.Maui.Authentication.IWebAuthenticatorResponseDecoder": typeof Microsoft_Maui_Authentication_IWebAuthenticatorResponseDecoder
	"Microsoft.Maui.Authentication.WebAuthenticator": typeof Microsoft_Maui_Authentication_WebAuthenticator
	"Microsoft.Maui.Authentication.WebAuthenticatorExtensions": typeof Microsoft_Maui_Authentication_WebAuthenticatorExtensions
	"Microsoft.Maui.Authentication.WebAuthenticatorOptions": typeof Microsoft_Maui_Authentication_WebAuthenticatorOptions
	"Microsoft.Maui.Authentication.WebAuthenticatorResult": typeof Microsoft_Maui_Authentication_WebAuthenticatorResult
	"Microsoft.Maui.Accessibility.ISemanticScreenReader": typeof Microsoft_Maui_Accessibility_ISemanticScreenReader
	"Microsoft.Maui.Accessibility.SemanticScreenReader": typeof Microsoft_Maui_Accessibility_SemanticScreenReader
	"Microsoft.Maui.Media.IMediaPicker": typeof Microsoft_Maui_Media_IMediaPicker
	"Microsoft.Maui.Media.MediaPicker": typeof Microsoft_Maui_Media_MediaPicker
	"Microsoft.Maui.Media.MediaPickerOptions": typeof Microsoft_Maui_Media_MediaPickerOptions
	"Microsoft.Maui.Media.IScreenshot": typeof Microsoft_Maui_Media_IScreenshot
	"Microsoft.Maui.Media.IPlatformScreenshot": typeof Microsoft_Maui_Media_IPlatformScreenshot
	"Microsoft.Maui.Media.IScreenshotResult": typeof Microsoft_Maui_Media_IScreenshotResult
	"Microsoft.Maui.Media.Screenshot": typeof Microsoft_Maui_Media_Screenshot
	"Microsoft.Maui.Media.ScreenshotExtensions": typeof Microsoft_Maui_Media_ScreenshotExtensions
	"Microsoft.Maui.Media.ITextToSpeech": typeof Microsoft_Maui_Media_ITextToSpeech
	"Microsoft.Maui.Media.TextToSpeech": typeof Microsoft_Maui_Media_TextToSpeech
	"Microsoft.Maui.Media.Locale": typeof Microsoft_Maui_Media_Locale
	"Microsoft.Maui.Media.SpeechOptions": typeof Microsoft_Maui_Media_SpeechOptions
	"Microsoft.Maui.Media.UnitConverters": typeof Microsoft_Maui_Media_UnitConverters
	"Microsoft.Maui.Storage.IFilePicker": typeof Microsoft_Maui_Storage_IFilePicker
	"Microsoft.Maui.Storage.FilePicker": typeof Microsoft_Maui_Storage_FilePicker
	"Microsoft.Maui.Storage.FilePickerFileType": typeof Microsoft_Maui_Storage_FilePickerFileType
	"Microsoft.Maui.Storage.PickOptions": typeof Microsoft_Maui_Storage_PickOptions
	"Microsoft.Maui.Storage.IFileSystem": typeof Microsoft_Maui_Storage_IFileSystem
	"Microsoft.Maui.Storage.FileSystem": typeof Microsoft_Maui_Storage_FileSystem
	"Microsoft.Maui.Storage.FileSystemImplementation": typeof Microsoft_Maui_Storage_FileSystemImplementation
	"Microsoft.Maui.Storage.FileBase": typeof Microsoft_Maui_Storage_FileBase
	"Microsoft.Maui.Storage.ReadOnlyFile": typeof Microsoft_Maui_Storage_ReadOnlyFile
	"Microsoft.Maui.Storage.FileResult": typeof Microsoft_Maui_Storage_FileResult
	"Microsoft.Maui.Storage.IPreferences": typeof Microsoft_Maui_Storage_IPreferences
	"Microsoft.Maui.Storage.Preferences": typeof Microsoft_Maui_Storage_Preferences
	"Microsoft.Maui.Storage.ISecureStorage": typeof Microsoft_Maui_Storage_ISecureStorage
	"Microsoft.Maui.Storage.IPlatformSecureStorage": typeof Microsoft_Maui_Storage_IPlatformSecureStorage
	"Microsoft.Maui.Storage.SecureStorage": typeof Microsoft_Maui_Storage_SecureStorage
	"Microsoft.Maui.Storage.SecureStorageExtensions": typeof Microsoft_Maui_Storage_SecureStorageExtensions
	"Microsoft.Maui.Networking.IConnectivity": typeof Microsoft_Maui_Networking_IConnectivity
	"Microsoft.Maui.Networking.Connectivity": typeof Microsoft_Maui_Networking_Connectivity
	"Microsoft.Maui.Networking.ConnectivityChangedEventArgs": typeof Microsoft_Maui_Networking_ConnectivityChangedEventArgs
	"Microsoft.Maui.ApplicationModel.IAppActions": typeof Microsoft_Maui_ApplicationModel_IAppActions
	"Microsoft.Maui.ApplicationModel.IPlatformAppActions": typeof Microsoft_Maui_ApplicationModel_IPlatformAppActions
	"Microsoft.Maui.ApplicationModel.AppActions": typeof Microsoft_Maui_ApplicationModel_AppActions
	"Microsoft.Maui.ApplicationModel.AppActionsExtensions": typeof Microsoft_Maui_ApplicationModel_AppActionsExtensions
	"Microsoft.Maui.ApplicationModel.AppActionEventArgs": typeof Microsoft_Maui_ApplicationModel_AppActionEventArgs
	"Microsoft.Maui.ApplicationModel.AppAction": typeof Microsoft_Maui_ApplicationModel_AppAction
	"Microsoft.Maui.ApplicationModel.IAppInfo": typeof Microsoft_Maui_ApplicationModel_IAppInfo
	"Microsoft.Maui.ApplicationModel.AppInfo": typeof Microsoft_Maui_ApplicationModel_AppInfo
	"Microsoft.Maui.ApplicationModel.IBrowser": typeof Microsoft_Maui_ApplicationModel_IBrowser
	"Microsoft.Maui.ApplicationModel.Browser": typeof Microsoft_Maui_ApplicationModel_Browser
	"Microsoft.Maui.ApplicationModel.BrowserExtensions": typeof Microsoft_Maui_ApplicationModel_BrowserExtensions
	"Microsoft.Maui.ApplicationModel.BrowserLaunchOptions": typeof Microsoft_Maui_ApplicationModel_BrowserLaunchOptions
	"Microsoft.Maui.ApplicationModel.ILauncher": typeof Microsoft_Maui_ApplicationModel_ILauncher
	"Microsoft.Maui.ApplicationModel.Launcher": typeof Microsoft_Maui_ApplicationModel_Launcher
	"Microsoft.Maui.ApplicationModel.LauncherExtensions": typeof Microsoft_Maui_ApplicationModel_LauncherExtensions
	"Microsoft.Maui.ApplicationModel.OpenFileRequest": typeof Microsoft_Maui_ApplicationModel_OpenFileRequest
	"Microsoft.Maui.ApplicationModel.MainThread": typeof Microsoft_Maui_ApplicationModel_MainThread
	"Microsoft.Maui.ApplicationModel.IMap": typeof Microsoft_Maui_ApplicationModel_IMap
	"Microsoft.Maui.ApplicationModel.Map": typeof Microsoft_Maui_ApplicationModel_Map
	"Microsoft.Maui.ApplicationModel.MapExtensions": typeof Microsoft_Maui_ApplicationModel_MapExtensions
	"Microsoft.Maui.ApplicationModel.MapLaunchOptions": typeof Microsoft_Maui_ApplicationModel_MapLaunchOptions
	"Microsoft.Maui.ApplicationModel.Permissions": typeof Microsoft_Maui_ApplicationModel_Permissions
	"Microsoft.Maui.ApplicationModel.Platform": typeof Microsoft_Maui_ApplicationModel_Platform
	"Microsoft.Maui.ApplicationModel.PermissionException": typeof Microsoft_Maui_ApplicationModel_PermissionException
	"Microsoft.Maui.ApplicationModel.FeatureNotSupportedException": typeof Microsoft_Maui_ApplicationModel_FeatureNotSupportedException
	"Microsoft.Maui.ApplicationModel.FeatureNotEnabledException": typeof Microsoft_Maui_ApplicationModel_FeatureNotEnabledException
	"Microsoft.Maui.ApplicationModel.IVersionTracking": typeof Microsoft_Maui_ApplicationModel_IVersionTracking
	"Microsoft.Maui.ApplicationModel.VersionTracking": typeof Microsoft_Maui_ApplicationModel_VersionTracking
	"Microsoft.Maui.ApplicationModel.Communication.IContacts": typeof Microsoft_Maui_ApplicationModel_Communication_IContacts
	"Microsoft.Maui.ApplicationModel.Communication.Contacts": typeof Microsoft_Maui_ApplicationModel_Communication_Contacts
	"Microsoft.Maui.ApplicationModel.Communication.IEmail": typeof Microsoft_Maui_ApplicationModel_Communication_IEmail
	"Microsoft.Maui.ApplicationModel.Communication.EmailExtensions": typeof Microsoft_Maui_ApplicationModel_Communication_EmailExtensions
	"Microsoft.Maui.ApplicationModel.Communication.Email": typeof Microsoft_Maui_ApplicationModel_Communication_Email
	"Microsoft.Maui.ApplicationModel.Communication.EmailMessage": typeof Microsoft_Maui_ApplicationModel_Communication_EmailMessage
	"Microsoft.Maui.ApplicationModel.Communication.EmailAttachment": typeof Microsoft_Maui_ApplicationModel_Communication_EmailAttachment
	"Microsoft.Maui.ApplicationModel.Communication.IPhoneDialer": typeof Microsoft_Maui_ApplicationModel_Communication_IPhoneDialer
	"Microsoft.Maui.ApplicationModel.Communication.PhoneDialer": typeof Microsoft_Maui_ApplicationModel_Communication_PhoneDialer
	"Microsoft.Maui.ApplicationModel.Communication.ISms": typeof Microsoft_Maui_ApplicationModel_Communication_ISms
	"Microsoft.Maui.ApplicationModel.Communication.Sms": typeof Microsoft_Maui_ApplicationModel_Communication_Sms
	"Microsoft.Maui.ApplicationModel.Communication.SmsMessage": typeof Microsoft_Maui_ApplicationModel_Communication_SmsMessage
	"Microsoft.Maui.ApplicationModel.Communication.Contact": typeof Microsoft_Maui_ApplicationModel_Communication_Contact
	"Microsoft.Maui.ApplicationModel.Communication.ContactEmail": typeof Microsoft_Maui_ApplicationModel_Communication_ContactEmail
	"Microsoft.Maui.ApplicationModel.Communication.ContactPhone": typeof Microsoft_Maui_ApplicationModel_Communication_ContactPhone
	"Microsoft.Maui.ApplicationModel.DataTransfer.IClipboard": typeof Microsoft_Maui_ApplicationModel_DataTransfer_IClipboard
	"Microsoft.Maui.ApplicationModel.DataTransfer.Clipboard": typeof Microsoft_Maui_ApplicationModel_DataTransfer_Clipboard
	"Microsoft.Maui.ApplicationModel.DataTransfer.IShare": typeof Microsoft_Maui_ApplicationModel_DataTransfer_IShare
	"Microsoft.Maui.ApplicationModel.DataTransfer.Share": typeof Microsoft_Maui_ApplicationModel_DataTransfer_Share
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareExtensions": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareExtensions
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareRequestBase": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareRequestBase
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareTextRequest": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareTextRequest
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareFileRequest": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareFileRequest
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareMultipleFilesRequest": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareMultipleFilesRequest
	"Microsoft.Maui.ApplicationModel.DataTransfer.ShareFile": typeof Microsoft_Maui_ApplicationModel_DataTransfer_ShareFile
	"Microsoft.Maui.Devices.IBattery": typeof Microsoft_Maui_Devices_IBattery
	"Microsoft.Maui.Devices.Battery": typeof Microsoft_Maui_Devices_Battery
	"Microsoft.Maui.Devices.BatteryInfoChangedEventArgs": typeof Microsoft_Maui_Devices_BatteryInfoChangedEventArgs
	"Microsoft.Maui.Devices.EnergySaverStatusChangedEventArgs": typeof Microsoft_Maui_Devices_EnergySaverStatusChangedEventArgs
	"Microsoft.Maui.Devices.IDeviceDisplay": typeof Microsoft_Maui_Devices_IDeviceDisplay
	"Microsoft.Maui.Devices.DisplayInfoChangedEventArgs": typeof Microsoft_Maui_Devices_DisplayInfoChangedEventArgs
	"Microsoft.Maui.Devices.DeviceDisplay": typeof Microsoft_Maui_Devices_DeviceDisplay
	"Microsoft.Maui.Devices.IDeviceInfo": typeof Microsoft_Maui_Devices_IDeviceInfo
	"Microsoft.Maui.Devices.DeviceInfo": typeof Microsoft_Maui_Devices_DeviceInfo
	"Microsoft.Maui.Devices.IFlashlight": typeof Microsoft_Maui_Devices_IFlashlight
	"Microsoft.Maui.Devices.Flashlight": typeof Microsoft_Maui_Devices_Flashlight
	"Microsoft.Maui.Devices.IHapticFeedback": typeof Microsoft_Maui_Devices_IHapticFeedback
	"Microsoft.Maui.Devices.HapticFeedback": typeof Microsoft_Maui_Devices_HapticFeedback
	"Microsoft.Maui.Devices.DeviceIdiom": typeof Microsoft_Maui_Devices_DeviceIdiom
	"Microsoft.Maui.Devices.DevicePlatform": typeof Microsoft_Maui_Devices_DevicePlatform
	"Microsoft.Maui.Devices.DisplayInfo": typeof Microsoft_Maui_Devices_DisplayInfo
	"Microsoft.Maui.Devices.IVibration": typeof Microsoft_Maui_Devices_IVibration
	"Microsoft.Maui.Devices.Vibration": typeof Microsoft_Maui_Devices_Vibration
	"Microsoft.Maui.Devices.VibrationExtensions": typeof Microsoft_Maui_Devices_VibrationExtensions
	"Microsoft.Maui.Devices.Sensors.IAccelerometer": typeof Microsoft_Maui_Devices_Sensors_IAccelerometer
	"Microsoft.Maui.Devices.Sensors.Accelerometer": typeof Microsoft_Maui_Devices_Sensors_Accelerometer
	"Microsoft.Maui.Devices.Sensors.AccelerometerChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_AccelerometerChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.AccelerometerData": typeof Microsoft_Maui_Devices_Sensors_AccelerometerData
	"Microsoft.Maui.Devices.Sensors.IBarometer": typeof Microsoft_Maui_Devices_Sensors_IBarometer
	"Microsoft.Maui.Devices.Sensors.Barometer": typeof Microsoft_Maui_Devices_Sensors_Barometer
	"Microsoft.Maui.Devices.Sensors.BarometerChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_BarometerChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.BarometerData": typeof Microsoft_Maui_Devices_Sensors_BarometerData
	"Microsoft.Maui.Devices.Sensors.ICompass": typeof Microsoft_Maui_Devices_Sensors_ICompass
	"Microsoft.Maui.Devices.Sensors.IPlatformCompass": typeof Microsoft_Maui_Devices_Sensors_IPlatformCompass
	"Microsoft.Maui.Devices.Sensors.Compass": typeof Microsoft_Maui_Devices_Sensors_Compass
	"Microsoft.Maui.Devices.Sensors.CompassExtensions": typeof Microsoft_Maui_Devices_Sensors_CompassExtensions
	"Microsoft.Maui.Devices.Sensors.CompassChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_CompassChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.CompassData": typeof Microsoft_Maui_Devices_Sensors_CompassData
	"Microsoft.Maui.Devices.Sensors.IGeocoding": typeof Microsoft_Maui_Devices_Sensors_IGeocoding
	"Microsoft.Maui.Devices.Sensors.IPlatformGeocoding": typeof Microsoft_Maui_Devices_Sensors_IPlatformGeocoding
	"Microsoft.Maui.Devices.Sensors.Geocoding": typeof Microsoft_Maui_Devices_Sensors_Geocoding
	"Microsoft.Maui.Devices.Sensors.GeocodingExtensions": typeof Microsoft_Maui_Devices_Sensors_GeocodingExtensions
	"Microsoft.Maui.Devices.Sensors.IGeolocation": typeof Microsoft_Maui_Devices_Sensors_IGeolocation
	"Microsoft.Maui.Devices.Sensors.Geolocation": typeof Microsoft_Maui_Devices_Sensors_Geolocation
	"Microsoft.Maui.Devices.Sensors.GeolocationExtensions": typeof Microsoft_Maui_Devices_Sensors_GeolocationExtensions
	"Microsoft.Maui.Devices.Sensors.GeolocationListeningFailedEventArgs": typeof Microsoft_Maui_Devices_Sensors_GeolocationListeningFailedEventArgs
	"Microsoft.Maui.Devices.Sensors.GeolocationListeningRequest": typeof Microsoft_Maui_Devices_Sensors_GeolocationListeningRequest
	"Microsoft.Maui.Devices.Sensors.GeolocationLocationChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_GeolocationLocationChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.GeolocationRequest": typeof Microsoft_Maui_Devices_Sensors_GeolocationRequest
	"Microsoft.Maui.Devices.Sensors.IGyroscope": typeof Microsoft_Maui_Devices_Sensors_IGyroscope
	"Microsoft.Maui.Devices.Sensors.Gyroscope": typeof Microsoft_Maui_Devices_Sensors_Gyroscope
	"Microsoft.Maui.Devices.Sensors.GyroscopeChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_GyroscopeChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.GyroscopeData": typeof Microsoft_Maui_Devices_Sensors_GyroscopeData
	"Microsoft.Maui.Devices.Sensors.IMagnetometer": typeof Microsoft_Maui_Devices_Sensors_IMagnetometer
	"Microsoft.Maui.Devices.Sensors.Magnetometer": typeof Microsoft_Maui_Devices_Sensors_Magnetometer
	"Microsoft.Maui.Devices.Sensors.MagnetometerChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_MagnetometerChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.MagnetometerData": typeof Microsoft_Maui_Devices_Sensors_MagnetometerData
	"Microsoft.Maui.Devices.Sensors.IOrientationSensor": typeof Microsoft_Maui_Devices_Sensors_IOrientationSensor
	"Microsoft.Maui.Devices.Sensors.OrientationSensor": typeof Microsoft_Maui_Devices_Sensors_OrientationSensor
	"Microsoft.Maui.Devices.Sensors.OrientationSensorChangedEventArgs": typeof Microsoft_Maui_Devices_Sensors_OrientationSensorChangedEventArgs
	"Microsoft.Maui.Devices.Sensors.OrientationSensorData": typeof Microsoft_Maui_Devices_Sensors_OrientationSensorData
	"Microsoft.Maui.Devices.Sensors.OrientationSensorImplementation": typeof Microsoft_Maui_Devices_Sensors_OrientationSensorImplementation
	"Microsoft.Maui.Devices.Sensors.Location": typeof Microsoft_Maui_Devices_Sensors_Location
	"Microsoft.Maui.Devices.Sensors.LocationExtensions": typeof Microsoft_Maui_Devices_Sensors_LocationExtensions
	"Microsoft.Maui.Devices.Sensors.Placemark": typeof Microsoft_Maui_Devices_Sensors_Placemark
	"Microsoft.Maui.Devices.Sensors.PlacemarkExtensions": typeof Microsoft_Maui_Devices_Sensors_PlacemarkExtensions
	"Microsoft.Maui.Authentication.Options": typeof Microsoft_Maui_Authentication_Options
	"Microsoft.Maui.ApplicationModel.BasePermission": typeof Microsoft_Maui_ApplicationModel_BasePermission
	"Microsoft.Maui.ApplicationModel.Battery": typeof Microsoft_Maui_ApplicationModel_Battery
	"Microsoft.Maui.ApplicationModel.Bluetooth": typeof Microsoft_Maui_ApplicationModel_Bluetooth
	"Microsoft.Maui.ApplicationModel.CalendarRead": typeof Microsoft_Maui_ApplicationModel_CalendarRead
	"Microsoft.Maui.ApplicationModel.CalendarWrite": typeof Microsoft_Maui_ApplicationModel_CalendarWrite
	"Microsoft.Maui.ApplicationModel.Camera": typeof Microsoft_Maui_ApplicationModel_Camera
	"Microsoft.Maui.ApplicationModel.ContactsRead": typeof Microsoft_Maui_ApplicationModel_ContactsRead
	"Microsoft.Maui.ApplicationModel.ContactsWrite": typeof Microsoft_Maui_ApplicationModel_ContactsWrite
	"Microsoft.Maui.ApplicationModel.Flashlight": typeof Microsoft_Maui_ApplicationModel_Flashlight
	"Microsoft.Maui.ApplicationModel.LaunchApp": typeof Microsoft_Maui_ApplicationModel_LaunchApp
	"Microsoft.Maui.ApplicationModel.LocationWhenInUse": typeof Microsoft_Maui_ApplicationModel_LocationWhenInUse
	"Microsoft.Maui.ApplicationModel.LocationAlways": typeof Microsoft_Maui_ApplicationModel_LocationAlways
	"Microsoft.Maui.ApplicationModel.Maps": typeof Microsoft_Maui_ApplicationModel_Maps
	"Microsoft.Maui.ApplicationModel.Media": typeof Microsoft_Maui_ApplicationModel_Media
	"Microsoft.Maui.ApplicationModel.Microphone": typeof Microsoft_Maui_ApplicationModel_Microphone
	"Microsoft.Maui.ApplicationModel.NearbyWifiDevices": typeof Microsoft_Maui_ApplicationModel_NearbyWifiDevices
	"Microsoft.Maui.ApplicationModel.NetworkState": typeof Microsoft_Maui_ApplicationModel_NetworkState
	"Microsoft.Maui.ApplicationModel.Phone": typeof Microsoft_Maui_ApplicationModel_Phone
	"Microsoft.Maui.ApplicationModel.Photos": typeof Microsoft_Maui_ApplicationModel_Photos
	"Microsoft.Maui.ApplicationModel.PhotosAddOnly": typeof Microsoft_Maui_ApplicationModel_PhotosAddOnly
	"Microsoft.Maui.ApplicationModel.PostNotifications": typeof Microsoft_Maui_ApplicationModel_PostNotifications
	"Microsoft.Maui.ApplicationModel.Reminders": typeof Microsoft_Maui_ApplicationModel_Reminders
	"Microsoft.Maui.ApplicationModel.Sensors": typeof Microsoft_Maui_ApplicationModel_Sensors
	"Microsoft.Maui.ApplicationModel.Sms": typeof Microsoft_Maui_ApplicationModel_Sms
	"Microsoft.Maui.ApplicationModel.Speech": typeof Microsoft_Maui_ApplicationModel_Speech
	"Microsoft.Maui.ApplicationModel.StorageRead": typeof Microsoft_Maui_ApplicationModel_StorageRead
	"Microsoft.Maui.ApplicationModel.StorageWrite": typeof Microsoft_Maui_ApplicationModel_StorageWrite
	"Microsoft.Maui.ApplicationModel.Vibrate": typeof Microsoft_Maui_ApplicationModel_Vibrate
	"Microsoft.Maui.ApplicationModel.BasePlatformPermission": typeof Microsoft_Maui_ApplicationModel_BasePlatformPermission
}


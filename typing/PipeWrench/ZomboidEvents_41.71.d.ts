/**
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/** @noResolution @noSelfInFile */
declare module 'ZomboidEvents' {
    import { se, zombie, ByteBufferWriter, IsoPlayer, InventoryItem, IsoGridSquare, SafeHouse, IsoZombie, IsoObject, WeatherPeriod, HandWeapon, IsoGameCharacter, BaseVehicle, WeatherStage, BuildingDef, Server, ChatTab, ArrayList, ByteBuffer, IsoCell, IsoWindow, IsoThumpable, IsoDoor, IsoFire, RadioScriptManager, IsoSpriteManager, ErosionSeason, RecordedMedia, BodyPartType, ItemContainer, Moveable, MovableRecipe, IsoChunk, VehiclePart, Radio, IsoWaveSignal, IsoSurvivor, SurvivorDesc, IsoWorldInventoryObject, IsoDeadBody, Food, ClimateManager, Perk, ObjectTooltip } from 'Zomboid';
    type KahluaTable = se.krka.kahlua.vm.KahluaTable;
    /**
     * EventEmitter is for both vanilla ProjectZomboid event handling and custom events written for PipeWrench.
     *
     * @author Jab
     * @param L The type of {@link EventListener} associated with the Lua-event.
     */
    export class EventEmitter<L> {
        /** The Lua-event ID. */
        readonly id: string;
        /** @param id The Lua-event ID. */
        constructor(id: string);
        /** @param listener The listener to register. */
        addListener(listener: L): void;
        /** @param listener The listener to unregister. */
        removeListener(listener: L): void;
    }
    export const acceptedFactionInvite: EventEmitter<AcceptedFactionInviteListener>;
    export const acceptedSafehouseInvite: EventEmitter<AcceptedSafehouseInviteListener>;
    export const acceptedTrade: EventEmitter<AcceptedTradeListener>;
    export const addXP: EventEmitter<AddXPListener>;
    export const doSpecialTooltip: EventEmitter<DoSpecialTooltipListener>;
    export const everyDays: EventEmitter<EveryDaysListener>;
    export const everyHours: EventEmitter<EveryHoursListener>;
    export const everyOneMinute: EventEmitter<EveryOneMinuteListener>;
    export const everyTenMinutes: EventEmitter<EveryTenMinutesListener>;
    export const levelPerk: EventEmitter<LevelPerkListener>;
    export const loadGridSquare: EventEmitter<LoadGridSquareListener>;
    export const mngInvReceiveItems: EventEmitter<MngInvReceiveItemsListener>;
    export const onAcceptInvite: EventEmitter<OnAcceptInviteListener>;
    export const onAddForageDefinitions: EventEmitter<OnAddForageDefinitionsListener>;
    export const onAddMessage: EventEmitter<OnAddMessageListener>;
    export const onAdminMessage: EventEmitter<OnAdminMessageListener>;
    export const onAIStateChange: EventEmitter<OnAIStateChangeListener>;
    export const onAmbientSound: EventEmitter<OnAmbientSoundListener>;
    export const onCGlobalObjectSystemInit: EventEmitter<OnCGlobalObjectSystemInitListener>;
    export const onChallengeQuery: EventEmitter<OnChallengeQueryListener>;
    export const onChangeWeather: EventEmitter<OnChangeWeatherListener>;
    export const onCharacterCollide: EventEmitter<OnCharacterCollideListener>;
    export const onCharacterDeath: EventEmitter<OnCharacterDeathListener>;
    export const onChatWindowInit: EventEmitter<OnChatWindowInitListener>;
    export const onClientCommand: EventEmitter<OnClientCommandListener>;
    export const onClimateManagerInit: EventEmitter<OnClimateManagerInitListener>;
    export const onClimateTick: EventEmitter<OnClimateTickListener>;
    export const onClimateTickDebug: EventEmitter<OnClimateTickDebugListener>;
    export const onClothingUpdated: EventEmitter<OnClothingUpdatedListener>;
    export const onConnected: EventEmitter<OnConnectedListener>;
    export const onConnectFailed: EventEmitter<OnConnectFailedListener>;
    export const onConnectionStateChanged: EventEmitter<OnConnectionStateChangedListener>;
    export const onContainerUpdate: EventEmitter<OnContainerUpdateListener>;
    export const onCoopJoinFailed: EventEmitter<OnCoopJoinFailedListener>;
    export const onCoopServerMessage: EventEmitter<OnCoopServerMessageListener>;
    export const onCreateLivingCharacter: EventEmitter<OnCreateLivingCharacterListener>;
    export const onCreatePlayer: EventEmitter<OnCreatePlayerListener>;
    export const onCreateSurvivor: EventEmitter<OnCreateSurvivorListener>;
    export const onCreateUI: EventEmitter<OnCreateUIListener>;
    export const onCustomUIKey: EventEmitter<OnCustomUIKeyListener>;
    export const onCustomUIKeyPressed: EventEmitter<OnCustomUIKeyPressedListener>;
    export const onCustomUIKeyReleased: EventEmitter<OnCustomUIKeyReleasedListener>;
    export const onDawn: EventEmitter<OnDawnListener>;
    export const onDestroyIsoThumpable: EventEmitter<OnDestroyIsoThumpableListener>;
    export const onDeviceText: EventEmitter<OnDeviceTextListener>;
    export const onDisableSearchMode: EventEmitter<OnDisableSearchModeListener>;
    export const onDisconnect: EventEmitter<OnDisconnectListener>;
    export const onDistributionMerge: EventEmitter<OnDistributionMergeListener>;
    export const onDoTileBuilding2: EventEmitter<OnDoTileBuilding2Listener>;
    export const onDoTileBuilding3: EventEmitter<OnDoTileBuilding3Listener>;
    export const onDusk: EventEmitter<OnDuskListener>;
    export const onDynamicMovableRecipe: EventEmitter<OnDynamicMovableRecipeListener>;
    export const onEnableSearchMode: EventEmitter<OnEnableSearchModeListener>;
    export const onEnterVehicle: EventEmitter<OnEnterVehicleListener>;
    export const onEquipPrimary: EventEmitter<OnEquipPrimaryListener>;
    export const onEquipSecondary: EventEmitter<OnEquipSecondaryListener>;
    export const onExitVehicle: EventEmitter<OnExitVehicleListener>;
    export const onFrontEndTick: EventEmitter<OnFrontEndTickListener>;
    export const onFillContainer: EventEmitter<OnFillContainerListener>;
    export const onFillInventoryObjectContextMenu: EventEmitter<OnFillInventoryObjectContextMenuListener>;
    export const onFillSearchIconContextMenu: EventEmitter<OnFillSearchIconContextMenuListener>;
    export const onFillWorldObjectContextMenu: EventEmitter<OnFillWorldObjectContextMenuListener>;
    export const onGameBoot: EventEmitter<OnGameBootListener>;
    export const onGamepadConnect: EventEmitter<OnGamepadConnectListener>;
    export const onGamepadDisconnect: EventEmitter<OnGamepadDisconnectListener>;
    export const onGameStart: EventEmitter<OnGameStartListener>;
    export const onGameTimeLoaded: EventEmitter<OnGameTimeLoadedListener>;
    export const onGetDBSchema: EventEmitter<OnGetDBSchemaListener>;
    export const onGetTableResult: EventEmitter<OnGetTableResultListener>;
    export const onGridBurnt: EventEmitter<OnGridBurntListener>;
    export const onHitZombie: EventEmitter<OnHitZombieListener>;
    export const onInitGlobalModData: EventEmitter<OnInitGlobalModDataListener>;
    export const onInitModdedWeatherStage: EventEmitter<OnInitModdedWeatherStageListener>;
    export const onInitRecordedMedia: EventEmitter<OnInitRecordedMediaListener>;
    export const onInitSeasons: EventEmitter<OnInitSeasonsListener>;
    export const onInitWorld: EventEmitter<OnInitWorldListener>;
    export const onItemFall: EventEmitter<OnItemFallListener>;
    export const onJoypadActivate: EventEmitter<OnJoypadActivateListener>;
    export const onJoypadActivateUI: EventEmitter<OnJoypadActivateUIListener>;
    export const onJoypadBeforeDeactivate: EventEmitter<OnJoypadBeforeDeactivateListener>;
    export const onJoypadBeforeReactivate: EventEmitter<OnJoypadBeforeReactivateListener>;
    export const onJoypadDeactivate: EventEmitter<OnJoypadDeactivateListener>;
    export const onJoypadReactivate: EventEmitter<OnJoypadReactivateListener>;
    export const onJoypadRenderUI: EventEmitter<OnJoypadRenderUIListener>;
    export const onKeyKeepPressed: EventEmitter<OnKeyKeepPressedListener>;
    export const onKeyPressed: EventEmitter<OnKeyPressedListener>;
    export const onKeyStartPressed: EventEmitter<OnKeyStartPressedListener>;
    export const onLoad: EventEmitter<OnLoadListener>;
    export const onLoadedTileDefinitions: EventEmitter<OnLoadedTileDefinitionsListener>;
    export const onLoadMapZones: EventEmitter<OnLoadMapZonesListener>;
    export const onLoadModDataFromServer: EventEmitter<OnLoadModDataFromServerListener>;
    export const onLoadRadioScripts: EventEmitter<OnLoadRadioScriptsListener>;
    export const onLoadSoundBanks: EventEmitter<OnLoadSoundBanksListener>;
    export const onMainMenuEnter: EventEmitter<OnMainMenuEnterListener>;
    export const onMechanicActionDone: EventEmitter<OnMechanicActionDoneListener>;
    export const onMiniScoreboardUpdate: EventEmitter<OnMiniScoreboardUpdateListener>;
    export const onModsModified: EventEmitter<OnModsModifiedListener>;
    export const onMouseDown: EventEmitter<OnMouseDownListener>;
    export const onMouseMove: EventEmitter<OnMouseMoveListener>;
    export const onMouseUp: EventEmitter<OnMouseUpListener>;
    export const onMultiTriggerNPCEvent: EventEmitter<OnMultiTriggerNPCEventListener>;
    export const onNewFire: EventEmitter<OnNewFireListener>;
    export const onNewGame: EventEmitter<OnNewGameListener>;
    export const onObjectAboutToBeRemoved: EventEmitter<OnObjectAboutToBeRemovedListener>;
    export const onObjectAdded: EventEmitter<OnObjectAddedListener>;
    export const onObjectCollide: EventEmitter<OnObjectCollideListener>;
    export const onObjectLeftMouseButtonDown: EventEmitter<OnObjectLeftMouseButtonDownListener>;
    export const onObjectLeftMouseButtonUp: EventEmitter<OnObjectLeftMouseButtonUpListener>;
    export const onObjectRightMouseButtonDown: EventEmitter<OnObjectRightMouseButtonDownListener>;
    export const onObjectRightMouseButtonUp: EventEmitter<OnObjectRightMouseButtonUpListener>;
    export const onPlayerAttackFinished: EventEmitter<OnPlayerAttackFinishedListener>;
    export const onPlayerDeath: EventEmitter<OnPlayerDeathListener>;
    export const onPlayerMove: EventEmitter<OnPlayerMoveListener>;
    export const onPlayerUpdate: EventEmitter<OnPlayerUpdateListener>;
    export const onPostDistributionMerge: EventEmitter<OnPostDristributionMergeListener>;
    export const onPostFloorLayerDraw: EventEmitter<OnPostFloorLayerDrawListener>;
    export const onPostMapLoad: EventEmitter<OnPostMapLoadListener>;
    export const onPostRender: EventEmitter<OnPostRenderListener>;
    export const onPostSave: EventEmitter<OnPostSaveListener>;
    export const onPostUIDraw: EventEmitter<OnPostUIDrawListener>;
    export const onPreDistributionMerge: EventEmitter<OnPreDistributionMergeListener>;
    export const onPreFillInventoryObjectContextMenu: EventEmitter<OnPreFillInventoryObjectContextMenuListener>;
    export const onPreFillWorldObjectContextMenu: EventEmitter<OnPreFillWorldObjectContextMenuListener>;
    export const onPreMapLoad: EventEmitter<OnPreMapLoadListener>;
    export const onPressRackButton: EventEmitter<OnPressRackButtonListener>;
    export const onPreUIDraw: EventEmitter<OnPreUIDrawListener>;
    export const onRainStop: EventEmitter<OnRainStopListener>;
    export const onReceiveGlobalModData: EventEmitter<OnReceiveGlobalModDataListener>;
    export const onReceiveItemListNet: EventEmitter<OnReceiveItemListNetListener>;
    export const onReceiveUserlog: EventEmitter<OnReceiveUserlogListener>;
    export const onRefreshInventoryWindowContainers: EventEmitter<OnRefreshInventoryWindowContainersListener>;
    export const onRenderTick: EventEmitter<OnRenderTickListener>;
    export const onResetLua: EventEmitter<OnResetLuaListener>;
    export const onResolutionChange: EventEmitter<OnResolutionChangeListener>;
    export const onRightMouseDown: EventEmitter<OnRightMouseDownListener>;
    export const onRightMouseUp: EventEmitter<OnRightMouseUpListener>;
    export const onSafehousesChanged: EventEmitter<OnSafehousesChangedListener>;
    export const onSave: EventEmitter<OnSaveListener>;
    export const onScoreboardUpdate: EventEmitter<OnScoreboardUpdateListener>;
    export const onSeeNewRoom: EventEmitter<OnSeeNewRoomListener>;
    export const onServerCommand: EventEmitter<OnServerCommandListener>;
    export const onServerFinishSaving: EventEmitter<OnServerFinishSavingListener>;
    export const onServerStarted: EventEmitter<OnServerStartedListener>;
    export const onServerStartSaving: EventEmitter<OnServerStartSavingListener>;
    export const onServerStatisticReceived: EventEmitter<OnServerStatisticReceivedListener>;
    export const onServerWorkshopItems: EventEmitter<OnServerWorkshopItemsListener>;
    export const onSetDefaultTab: EventEmitter<OnSetDefaultTabListener>;
    export const onSGlobalObjectSystemInit: EventEmitter<OnSGlobalObjectSystemInitListener>;
    export const onSpawnRegionsLoaded: EventEmitter<OnSpawnRegionsLoadedListener>;
    export const onSteamFriendStatusChanged: EventEmitter<OnSteamFriendStatusChangedListener>;
    export const onSteamGameJoin: EventEmitter<OnSteamGameJoinListener>;
    export const onSteamRefreshInternetServers: EventEmitter<OnSteamRefreshInternetServersListener>;
    export const onSteamRulesRefreshComplete: EventEmitter<OnSteamRulesRefreshCompleteListener>;
    export const onSteamServerFailedToRespond2: EventEmitter<OnSteamServerFailedToRespond2Listener>;
    export const onSteamServerResponded: EventEmitter<OnSteamServerRespondedListener>;
    export const onSteamServerResponded2: EventEmitter<OnSteamServerResponded2Listener>;
    export const onSteamWorkshopItemCreated: EventEmitter<OnSteamWorkshopItemCreatedListener>;
    export const onSteamWorkshopItemNotCreated: EventEmitter<OnSteamWorkshopItemNotCreatedListener>;
    export const onSteamWorkshopItemNotUpdated: EventEmitter<OnSteamWorkshopItemNotUpdatedListener>;
    export const onSteamWorkshopItemUpdated: EventEmitter<OnSteamWorkshopItemUpdatedListener>;
    export const onSwitchVehicleSeat: EventEmitter<OnSwitchVehicleSeatListener>;
    export const onTabAdded: EventEmitter<OnTabAddedListener>;
    export const onTabRemoved: EventEmitter<OnTabRemovedListener>;
    export const onThunderEvent: EventEmitter<OnThunderEventListener>;
    export const onTick: EventEmitter<OnTickListener>;
    export const onTickEvenPaused: EventEmitter<OnTickEvenPausedListener>;
    export const onTileRemoved: EventEmitter<OnTileRemovedListener>;
    export const onToggleSearchMode: EventEmitter<OnToggleSearchModeListener>;
    export const onTriggerNPCEvent: EventEmitter<OnTriggerNPCEventListener>;
    export const onUpdateIcon: EventEmitter<OnUpdateIconListener>;
    export const onUpdateModdedWeatherStage: EventEmitter<OnUpdateModdedWeatherStageListener>;
    export const onUseVehicle: EventEmitter<OnUseVehicleListener>;
    export const onVehicleDamageTexture: EventEmitter<OnVehicleDamageTextureListener>;
    export const onVehicleHorn: EventEmitter<OnVehicleHornListener>;
    export const onWaterAmountChange: EventEmitter<OnWaterAmountChangeListener>;
    export const onWeaponHitCharacter: EventEmitter<OnWeaponHitCharacterListener>;
    export const onWeaponHitTree: EventEmitter<OnWeaponHitTreeListener>;
    export const onWeaponHitXP: EventEmitter<OnWeaponHitXPListener>;
    export const onWeaponSwing: EventEmitter<OnWeaponSwingListener>;
    export const onWeaponSwingHitPoint: EventEmitter<OnWeaponSwingHitPointListener>;
    export const onWeatherPeriodComplete: EventEmitter<OnWeatherPeriodCompleteListener>;
    export const onWeatherPeriodStage: EventEmitter<OnWeatherPeriodStageListener>;
    export const onWeatherPeriodStart: EventEmitter<OnWeatherPeriodStartListener>;
    export const onWeatherPeriodStop: EventEmitter<OnWeatherPeriodStopListener>;
    export const onWorldSound: EventEmitter<OnWorldSoundListener>;
    export const onZombidDead: EventEmitter<OnZombieDeadListener>;
    export const onZombieUpdate: EventEmitter<OnZombieUpdateListener>;
    export const preAddCatDefinitions: EventEmitter<PreAddCatDefinitionsListener>;
    export const preAddForageDefinitions: EventEmitter<PreAddForageDefinitionsListener>;
    export const preAddItemDefinitions: EventEmitter<PreAddItemDefinitionsListener>;
    export const preAddZoneDefinitions: EventEmitter<PreAddZoneDefinitionsListener>;
    export const receiveFactionInvite: EventEmitter<ReceiveFactionInviteListener>;
    export const receiveSafehouseInvite: EventEmitter<ReceiveSafehouseInviteListener>;
    export const requestTrade: EventEmitter<RequestTradeListener>;
    export const reuseGridSquare: EventEmitter<ReuseGridSquareListener>;
    export const sendCustomModData: EventEmitter<SendCustomModDataListener>;
    export const serverPinged: EventEmitter<ServerPingedListener>;
    export const switchChatStream: EventEmitter<SwitchChatStreamListener>;
    export const syncFaction: EventEmitter<SyncFactionListener>;
    export const tradingUIAddItem: EventEmitter<TradingUIAddItemListener>;
    export const tradingUIRemoveItem: EventEmitter<TradingUIRemoveItemListener>;
    export const tradingUIUpdateState: EventEmitter<TradingUIUpdateStateListener>;
    /**
     * Triggered when a faction invite has been accepted.
     *
     * @param factionName The name of the faction the player accepted to join.
     * @param playerName The name of the player who accepted the invitation.
     */
    export type AcceptedFactionInviteListener = (factionName: string, playerName: string) => void;
    /**
     * Triggered when a safehouse invite has been accepted.
     *
     * @param safehouseName The name of the safehouse the player accepted to join.
     * @param playerName The name of the player who accepted the invitation.
     */
    export type AcceptedSafehouseInviteListener = (safehouseName: string, playerName: string) => void;
    /**
     * Triggered when a trade request has been accepted.
     *
     * @param accepted Whether the trade was accepted or not.
     */
    export type AcceptedTradeListener = (accepted: boolean) => void;
    /**
     * Triggered when a player gains XP.
     *
     * @param character The character who's gaining XP.
     * @param perk The perk that is being leveled up.
     * @param level The perk level gained.
     */
    export type AddXPListener = (character: IsoGameCharacter, perk: Perk, level: number) => void;
    /**
     * Triggered when a special tooltip is being rendered, after a user right-clicked an object.
     *
     * @param objectTooltip The tooltip object to be filled.
     * @param square The grid square on which the tooltip has been triggered.
     */
    export type DoSpecialTooltipListener = (objectTooltip: ObjectTooltip, square: IsoGridSquare) => void;
    /**
     * Triggered every day at midnight. (In-Game)
     */
    export type EveryDaysListener = () => void;
    /**
     * Triggered every hour. (In-Game)
     */
    export type EveryHoursListener = () => void;
    /**
     * Triggered every minute. (In-Game)
     */
    export type EveryOneMinuteListener = () => void;
    /**
     * Triggered every ten minutes. (In-Game)
     */
    export type EveryTenMinutesListener = () => void;
    /**
     * Triggered when a perk is being leveled up.
     *
     * @param character The character whose perk is being leveled up or down.
     * @param perk The perk being leveled up or down.
     * @param level Perk level.
     * @param levelUp Whether the perk is being leveled up.
     */
    export type LevelPerkListener = (character: IsoGameCharacter, perk: Perk, level: number, levelUp: boolean) => void;
    /**
     * Triggered when a square is being loaded.
     *
     * @param square The grid square that is being loaded.
     */
    export type LoadGridSquareListener = (square: IsoGridSquare) => void;
    /**
     * Triggered when the game client is receiving inventory items from the server.
     *
     * @param square The items that are being received.
     */
    export type MngInvReceiveItemsListener = (items: object) => void;
    /**
     * Triggered when a Steam invite has been accepted.
     *
     * @param connectionString The connection string.
     */
    export type OnAcceptInviteListener = (connectionString: string) => void;
    /**
     * Triggered when the forage definitions are being added.
     *
     * @param forageSystem The forage system object.
     */
    export type OnAddForageDefinitionsListener = (forageSystem: KahluaTable) => void;
    /**
     * Triggered when a chat message is being sent.
     *
     * @param message The chat message being added.
     * @param tabID The ID of the tab in which the message is being added.
     */
    export type OnAddMessageListener = (message: string, tabID: number) => void;
    /**
     * Triggered when a chat message from the server admin is being sent.
     *
     * @param text The text of the message being received from the admin.
     * @param x The x coordinate where to display the message.
     * @param y The y coordinate where to display the message.
     * @param z The z coordinate where to display the message.
     */
    export type OnAdminMessageListener = (text: string, x: number, y: number, z: number) => void;
    /**
     * Triggered before an AI state is being changed.
     *
     * @param character The character whose AI state is being changed.
     * @param newState The new AI state.
     * @param oldState The old AI state.
     */
    export type OnAIStateChangeListener = (character: IsoGameCharacter, newState: zombie.ai.State, oldState: zombie.ai.State) => void;
    /**
     * Triggered when an ambient sound starts.
     *
     * @param name The name of the ambient sound.
     * @param x The x coordinate of the ambient sound.
     * @param y The y coordinate of the ambient sound.
     */
    export type OnAmbientSoundListener = (name: string, x: number, y: number) => void;
    /**
     * Triggered when the client global object system is being initialized.
     */
    export type OnCGlobalObjectSystemInitListener = () => void;
    /**
     * Triggered when the challenge options are getting populated.
     */
    export type OnChallengeQueryListener = () => void;
    /**
     * Triggered when the weather changes.
     *
     * @param weather The weather ID. [normal, cloud, rain, sunny]
     */
    export type OnChangeWeatherListener = (weather: 'normal' | 'cloud' | 'rain' | 'sunny') => void;
    /**
     * Triggered when two characters collide together.
     *
     * @param player The character who's colliding with another character.
     * @param character The character who's being collided with.
     */
    export type OnCharacterCollideListener = (player: IsoGameCharacter, character: IsoGameCharacter) => void;
    /**
     * Triggered when a character dies.
     *
     * @param character The character who's about to die.
     */
    export type OnCharacterDeathListener = (character: IsoGameCharacter) => void;
    /**
     * Triggered when the chat window is being initialized.
     */
    export type OnChatWindowInitListener = () => void;
    /**
     * Triggered when the player sends a command to the server.
     *
     * @param module The name of the module for this client command.
     * @param command The text of the actual client command.
     * @param player The player who initiated the client command.
     * @param args The arguments of the client command.
     */
    export type OnClientCommandListener = (module: string, command: string, player: IsoPlayer, args: KahluaTable) => void;
    /**
     * Triggered after the ClimateManager has been initialized.
     *
     * @param climateManager The climate manager which is being initialized.
     */
    export type OnClimateManagerInitListener = (climateManager: ClimateManager) => void;
    /**
     * Triggered for every climate tick.
     *
     * @param climateManager The climate manager.
     */
    export type OnClimateTickListener = (climateManager: ClimateManager) => void;
    /**
     * Triggered for every climate tick but only when debug mode is enabled.
     *
     * @param climateManager The climate manager.
     */
    export type OnClimateTickDebugListener = (climateManager: ClimateManager) => void;
    /**
     * Triggered when a character's clothing items are updated.
     *
     * @param playerOrCharacter The character whose clothing has been updated.
     */
    export type OnClothingUpdatedListener = (playerOrCharacter: IsoPlayer | IsoGameCharacter) => void;
    /**
     * Triggered when the player successfully connects to the server.
     */
    export type OnConnectedListener = () => void;
    /**
     * Triggered when the connection to the server has failed.
     *
     * @param error The error message describing the reason for the connection failure.
     */
    export type OnConnectFailedListener = (error: string) => void;
    /**
     * When a player is connecting to the server, the connection is going through different stages. This event is triggered for each of these stages of the initial connection.
     *
     * @param state The current state of the connection that has changed.
     * @param reason The reason leading to the state change. It can be null.
     */
    export type OnConnectionStateChangedListener = (state: string, reason: string) => void;
    /**
     * Triggered when a container is being updated.
     *
     * @param container The container which is being updated.
     */
    export type OnContainerUpdateListener = (container: Food | IsoDeadBody | IsoGridSquare | IsoWorldInventoryObject) => void;
    /**
     * Triggered when a player fails to join a cooperative game.
     *
     * @param playerID The identifier of the player who was denied access to join the cooperative game. It can be either 0, 1, 2, or 3.
     */
    export type OnCoopJoinFailedListener = (playerID: number) => void;
    /**
     * Triggered when the player receives a server message during a cooperative game.
     *
     * @param messageType The type of message received from the server. Can be either `ping`, `pong`, `steam-id`, or `server-address`.
     * @param playerNick The nick of the player who's sending the message.
     * @param steamID The Steam identifier of the player who's sending the message.
     */
    export type OnCoopServerMessageListener = (messageType: string, playerNick: string, steamID: string) => void;
    /**
     * Triggered when either a player or survivor is being created.
     *
     * @param playerOrSurvivor The player or survivor who's being created.
     * @param survivorDescription The survivor description of the player or survivor who's being created.
     */
    export type OnCreateLivingCharacterListener = (playerOrSurvivor: IsoPlayer | IsoSurvivor, survivorDescription: SurvivorDesc) => void;
    /**
     * Triggered when a player is being created.
     *
     * @param playerIndex The index of the player who's being created.
     * @param player The player who's being created.
     */
    export type OnCreatePlayerListener = (playerIndex: number, player: IsoPlayer) => void;
    /**
     * Triggered when a survivor is being created.
     *
     * @param survivor The survivor who's being created.
     */
    export type OnCreateSurvivorListener = (survivor: IsoSurvivor) => void;
    /**
     * Triggered after UI initialization.
     */
    export type OnCreateUIListener = () => void;
    /**
     * Triggered when a custom UI key has been released.
     *
     * @param key The Keyboard key that has been released.
     */
    export type OnCustomUIKeyListener = (key: number) => void;
    /**
     * Triggered when a custom UI key has been pressed.
     *
     * @param key The {@link http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html Keyboard} key that has been pressed.
     */
    export type OnCustomUIKeyPressedListener = (key: number) => void;
    /**
     * Triggered when a custom UI key has been released.
     *
     * @param key @param key The {@link http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html Keyboard} key that has been released.
     */
    export type OnCustomUIKeyReleasedListener = (key: number) => void;
    /**
     * Triggered at dawn.
     */
    export type OnDawnListener = () => void;
    /**
     * Triggered when a thumpable object is being destroyed.
     *
     * @param thumpable The {@link https://zomboid-javadoc.com/41.65/zombie/iso/objects/IsoThumpable.html thumpable} object which is being destroyed.
     */
    export type OnDestroyIsoThumpableListener = (thumpable: IsoThumpable) => void;
    /**
     * Triggered when a media device is displaying text.
     *
     * @param interactCodes The interaction codes of the media device.
     * @param x The x coordinate of the media device displaying the text.
     * @param y The y coordinate of the media device displaying the text.
     * @param z The z coordinate of the media device displaying the text.
     * @param line The line of text which the media device is displaying.
     * @param device The media device that is displaying the text.
     */
    export type OnDeviceTextListener = (interactCodes: string, x: number, y: number, z: number, line: string, device: IsoWaveSignal | Radio | VehiclePart) => void;
    /**
     * Triggered when search mode is being disabled.
     *
     * @param player The player who's disabling search mode.
     * @param isSearchMode Whether search mode is being enabled or disabled.
     */
    export type OnDisableSearchModeListener = (player: IsoPlayer, isSearchMode: boolean) => void;
    /**
     * Triggered when the player disconnects from the server.
     */
    export type OnDisconnectListener = () => void;
    /**
     * Triggered before merging the world distribution.
     */
    export type OnDistributionMergeListener = () => void;
    /**
     * Triggered when a building tile is being set.
     *
     * @param chunk The chunk in which the tile is being set.
     * @param render Whether the tile should be rendered or not.
     * @param x The x coordinate of the tile being set.
     * @param y The x coordinate of the tile being set.
     * @param z The x coordinate of the tile being set.
     * @param square The grid square where the tile is being set.
     */
    export type OnDoTileBuilding2Listener = (chunk: IsoChunk, render: boolean, x: number, y: number, z: number, square: IsoGridSquare) => void;
    /**
     * Triggered when a building tile is being set.
     *
     * @param chunk The chunk in which the tile is being set.
     * @param render Whether the tile should be rendered or not.
     * @param x The x coordinate of the tile being set.
     * @param y The y coordinate of the tile being set.
     * @param z The z coordinate of the tile being set.
     */
    export type OnDoTileBuilding3Listener = (chunk: IsoChunk, render: boolean, x: number, y: number, z: number) => void;
    /**
     * Triggered at dusk.
     */
    export type OnDuskListener = () => void;
    /**
     * Triggered when a dynamic recipe for a movable inventory item is being used.
     *
     * @param movable The movable object resulting from using the recipe.
     */
    export type OnDynamicMovableRecipeListener = (movable: Moveable, movableRecipe: MovableRecipe, inventoryItem: InventoryItem, character: IsoGameCharacter) => void;
    /**
     * Triggered when search mode is being enabled.
     *
     * @param player The player who's enabling search mode.
     * @param isSearchMode Whether search mode is being enabled or disabled.
     */
    export type OnEnableSearchModeListener = (player: IsoPlayer, isSearchMode: boolean) => void;
    /**
     * Triggered when a player successfully enters a vehicle.
     *
     * @param character The character who's entering the vehicle.
     */
    export type OnEnterVehicleListener = (character: IsoGameCharacter) => void;
    /**
     * Triggered when a character equips an item in its primary slot.
     *
     * @param character The character who's equipping the item.
     * @param inventoryItem The item that is being equipped in the primary slot.
     */
    export type OnEquipPrimaryListener = (character: IsoGameCharacter, inventoryItem: InventoryItem) => void;
    /**
     * Triggered when a character equips an item in its secondary slot.
     *
     * @param character The character who's equipping the item.
     * @param inventoryItem The item that is being equipped in the secondary slot.
     */
    export type OnEquipSecondaryListener = (character: IsoGameCharacter, inventoryItem: InventoryItem) => void;
    /**
     * Triggered when a character is exiting a vehicle.
     *
     * @param character The character who's exiting the vehicle.
     */
    export type OnExitVehicleListener = (character: IsoGameCharacter) => void;
    /**
     * Same as OnTick, except is only called while on the main menu.
     *
     * @param numberTicks Always zero.
     */
    export type OnFrontEndTickListener = (numberTicks: number) => void;
    /**
     * Triggered after a container has been filled.
     *
     * @param roomName The room name in which the container is installed.
     * @param containerType The type of the container that is being filled.
     * @param itemContainer The container that is being filled.
     */
    export type OnFillContainerListener = (roomName: string, containerType: string, itemContainer: ItemContainer) => void;
    /**
     * Triggered when inventory object context menus are being filled.
     *
     * @param player The player for which the context menu is being filled.
     * @param table The context menu to be filled.
     * @param items The items available in the player inventory.
     */
    export type OnFillInventoryObjectContextMenuListener = (player: IsoPlayer, table: KahluaTable, items: KahluaTable) => void;
    /**
     * TODO
     *
     * @param context The context menu to be filled.
     * @param baseIcon TODO.
     */
    export type OnFillSearchIconContextMenuListener = (context: KahluaTable, baseIcon: KahluaTable) => void;
    /**
     * Triggered when world object context menus are being filled.
     *
     * @param player The player for which the context menu is being filled.
     * @param context The context menu to be filled.
     * @param worldObjects The world objects available nearby the player.
     * @param test Set to true if called for the purpose of testing for nearby objects.
     */
    export type OnFillWorldObjectContextMenuListener = (player: IsoPlayer, context: KahluaTable, worldObjects: KahluaTable, test: boolean) => void;
    /**
     * Triggered when either a game or a server is being started, or when mods are getting reloaded during a game.
     */
    export type OnGameBootListener = () => void;
    /**
     * Triggered when a gamepad has been connected.
     *
     * @param controllerID The identifier of the gamepad which has been connected.
     */
    export type OnGamepadConnectListener = () => void;
    /**
     * Triggered when a gamepad has been disconnected.
     *
     * @param controllerID The identifier of the gamepad which has been disconnected.
     */
    export type OnGamepadDisconnectListener = (controllerID: number) => void;
    /**
     * Triggered after the start of a new game, and after a saved game has been loaded.
     */
    export type OnGameStartListener = () => void;
    /**
     * Triggered after the GameTime has been initialized.
     */
    export type OnGameTimeLoadedListener = () => void;
    /**
     * Triggered when the game client is receiving a database schema from the server.
     *
     * @param dbSchema The database schema of the game client.
     */
    export type OnGetDBSchemaListener = (dbSchema: KahluaTable) => void;
    /**
     * Triggered when the game client is receiving a table result from the server.
     *
     * @param result The row data of the table result.
     * @param rowID The row identifier of the table result.
     * @param tableName The name of the table result.
     */
    export type OnGetTableResultListener = (result: ArrayList<any>, rowID: number, tableName: string) => void;
    /**
     * Triggered when a grid square is burning.
     *
     * @param square The grid square that is burning.
     */
    export type OnGridBurntListener = (square: IsoGridSquare) => void;
    /**
     * Triggered when a character hits a zombie.
     *
     * @param zombie The zombie that is being hit.
     * @param character The character who's hitting the zombie.
     * @param bodyPartType The body part where the zombie was hit.
     * @param handWeapon The hand weapon used to hit the zombie.
     */
    export type OnHitZombieListener = (zombie: IsoZombie, character: IsoGameCharacter, bodyPartType: BodyPartType, handWeapon: HandWeapon) => void;
    /**
     * Triggered after GlobalModData has been initialized.
     *
     * @param isNewGame Whether this is a new game or not.
     */
    export type OnInitGlobalModDataListener = (isNewGame: boolean) => void;
    /**
     * Triggered when the modded weather state is being initialized.
     *
     * @param period The weather period of this weather stage.
     * @param stage The weather stage to be initialized.
     * @param strength (No documentation)
     */
    export type OnInitModdedWeatherStageListener = (period: WeatherPeriod, stage: WeatherStage, strength: number) => void;
    /**
     * Triggered when a media is being recorded.
     *
     * @param recordedMedia The recorded media to be initialized.
     */
    export type OnInitRecordedMediaListener = (recordedMedia: RecordedMedia) => void;
    /**
     * Triggered when the seasons have been initialized.
     *
     * @param erosionSeason The season to be initialized.
     */
    export type OnInitSeasonsListener = (erosionSeason: ErosionSeason) => void;
    /**
     * Triggered during the process of initializing the world.
     */
    export type OnInitWorldListener = () => void;
    /**
     * Triggered when an item is being dropped on the ground.
     *
     * @param item The inventory item being dropped on the ground.
     */
    export type OnItemFallListener = (item: InventoryItem) => void;
    /**
     * Triggered when a joypad is activated in-game.
     *
     * @param controllerId The identifier of the joypad which has been activated.
     */
    export type OnJoypadActivateListener = (controllerID: number) => void;
    /**
     * Triggered when joypad is activated from main screen.
     *
     * @param joypadID The identifier of the joypad.
     */
    export type OnJoypadActivateUIListener = (joypadID: number) => void;
    /**
     * Triggered when a joypad was disconnected, just before being deactivated.
     *
     * @param joypadID The identifier of the joypad.
     */
    export type OnJoypadBeforeDeactivateListener = (joypadID: number) => void;
    /**
     * Triggered when a joypad was connected, just before being activated.
     *
     * @param joypadID The identifier of the joypad.
     */
    export type OnJoypadBeforeReactivateListener = (joypadID: number) => void;
    /**
     * Triggered when a joypad was disconnected, just after it's been deactivated.
     *
     * @param joypadID The identifier of the joypad.
     */
    export type OnJoypadDeactivateListener = (joypadID: number) => void;
    /**
     * Triggered when a joypad was connected, just after it's been activated.
     *
     * @param joypadID The identifier of the joypad.
     */
    export type OnJoypadReactivateListener = (joypadID: number) => void;
    /**
     * Triggered every time the screen is being rendered, whether in-game or on main screen.
     */
    export type OnJoypadRenderUIListener = () => void;
    /**
     * Triggered when a keyboard key is being held down.
     *
     * @param key The {@link http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html Keyboard} key that has been kept pressed.
     */
    export type OnKeyKeepPressedListener = (key: number) => void;
    /**
     * Triggered when a keyboard key is being pressed.
     *
     * @param key The {@link http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html Keyboard} key that has been released.
     */
    export type OnKeyPressedListener = (key: number) => void;
    /**
     * Triggered when a keyboard key is initially being pressed.
     *
     * @param key The {@link http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html Keyboard} key that has been pressed.
     */
    export type OnKeyStartPressedListener = (key: number) => void;
    /**
     * Triggered when a game is loading, after OnGameStart.
     */
    export type OnLoadListener = () => void;
    /**
     * Triggered after tiles definitions have been loaded.
     *
     * @param spriteManager The sprite manager.
     */
    export type OnLoadedTileDefinitionsListener = (spriteManager: IsoSpriteManager) => void;
    /**
     * Triggered when IsoWorld initialises and is registering the zones for the map.
     */
    export type OnLoadMapZonesListener = () => void;
    /**
     * Triggered after ModData has been received from the server.
     *
     * @param square The grid square whose ModData is getting loaded from the server.
     */
    export type OnLoadModDataFromServerListener = (square: IsoGridSquare) => void;
    /**
     * Triggered when radio scripts are being loaded.
     *
     * @param radioScriptManager The radio script manager.
     * @param worldInit True if the world has not yet been initialized.
     */
    export type OnLoadRadioScriptsListener = (radioScriptManager: RadioScriptManager, worldInit: boolean) => void;
    /**
     * Triggered when sound banks are loaded for the game.
     */
    export type OnLoadSoundBanksListener = () => void;
    /**
     * Triggered when main menu is displayed to users. This can occur either when they launch the game, or when they quit a running game.
     */
    export type OnMainMenuEnterListener = () => void;
    /**
     * Triggered when a player finished a mechanic action.
     *
     * @param character The character who performed the mechanic action.
     * @param success Whether the machanic action was successful or not.
     * @param vehicleID The identifier of the vehicle on which the mechanic action is being performed.
     * @param partID The vehicle part identifier that is being installed or removed.
     * @param itemID The item identifier used to perform the mechanic action.
     * @param installing Whether the vehicle part is being installed or removed.
     */
    export type OnMechanicActionDoneListener = (character: IsoGameCharacter, success: boolean, vehicleID: number, partID: string, itemID: number, installing: boolean) => void;
    /**
     * Triggered when the mini scoreboard is being updated.
     */
    export type OnMiniScoreboardUpdateListener = () => void;
    /**
     * Triggered when a mod has been modified on the filesystem.
     */
    export type OnModsModifiedListener = () => void;
    /**
     * Triggered when the mouse button is down.
     *
     * @param x The x coordinate where the mouse button was pressed down.
     * @param y The y coordinate where the mouse button was pressed down.
     */
    export type OnMouseDownListener = (x: number, y: number) => void;
    /**
     * Triggered when the mouse is moved.
     *
     * @param x The x coordinate of the mouse position.
     * @param y The y coordinate of the mouse position.
     * @param deltaX TODO: Mouse position deltaX?
     * @param deltaY TODO: Mouse position deltaY?
     */
    export type OnMouseMoveListener = (x: number, y: number, deltaX: number, deltaY: number) => void;
    /**
     * Triggered when the mouse button is released.
     *
     * @param x The x coordinate where the mouse button was released.
     * @param y The y coordinate where the mouse button was released.
     */
    export type OnMouseUpListener = (x: number, y: number) => void;
    /**
     * Called when a player enters the trigger area of a NPC event.
     *
     * @param triggerType The type of trigger of this NPC event.
     * @param modData The ModData of this trigger.
     * @param BuildingDef The building definition of this trigger.
     */
    export type OnMultiTriggerNPCEventListener = (triggerType: string, modData: KahluaTable, buildingDef: BuildingDef) => void;
    /**
     * Triggered when a fire starts.
     *
     * @param fire The fire object.
     */
    export type OnNewFireListener = (fire: IsoFire) => void;
    /**
     * Triggered after a new world has been initialized.
     *
     * @param player The player who's starting the game.
     * @param square The grid square where the player is located.
     */
    export type OnNewGameListener = (player: IsoPlayer, square: IsoGridSquare) => void;
    /**
     * Triggered when an object is about to get removed.
     *
     * @param object The object about to be removed.
     */
    export type OnObjectAboutToBeRemovedListener = (object: IsoObject) => void;
    /**
     * Triggered when an object is added to the map.
     *
     * @param object The object that was added.
     */
    export type OnObjectAddedListener = (object: IsoObject) => void;
    /**
     * Triggered when a character collides with an object.
     *
     * @param character The character who's colliding with another object.
     * @param door The object that is being collided with.
     */
    export type OnObjectCollideListener = (character: IsoGameCharacter, door: IsoDoor | IsoThumpable | IsoWindow | IsoZombie) => void;
    /**
     * Triggered when left mouse button clicked on object
     *
     * @param object The object on which the left mouse button was pressed down.
     * @param x The x coordinate where the left mouse button was pressed down.
     * @param y The y coordinate where the left mouse button was pressed down.
     */
    export type OnObjectLeftMouseButtonDownListener = (object: IsoObject, x: number, y: number) => void;
    /**
     * Triggered when left mouse button is released on object.
     *
     * @param object The object on which the left mouse button was released.
     * @param x The x coordinate where the left mouse button was released.
     * @param y The y coordinate where the left mouse button was released.
     */
    export type OnObjectLeftMouseButtonUpListener = (object: IsoObject, x: number, y: number) => void;
    /**
     * Triggered when right mouse button clicked on object.
     *
     * @param object The object on which the right mouse button was pressed down.
     * @param x The x coordinate where the right mouse button was pressed down.
     * @param y The y coordinate where the right mouse button was pressed down.
     */
    export type OnObjectRightMouseButtonDownListener = (object: IsoObject, x: number, y: number) => void;
    /**
     * Triggered when right mouse button is released on object.
     *
     * @param object The object on which the right mouse button was released.
     * @param x The x coordinate where the right mouse button was released.
     * @param y The y coordinate where the right mouse button was released.
     */
    export type OnObjectRightMouseButtonUpListener = (object: IsoObject, x: number, y: number) => void;
    /**
     * Triggered when a character is done performing an attack.
     *
     * @param character The character who's finished attacking.
     * @param handWeapon The hand weapon used to perform the attack.
     */
    export type OnPlayerAttackFinishedListener = (character: IsoGameCharacter, handWeapon: HandWeapon) => void;
    /**
     * Triggered when a player dies.
     *
     * @param player The player who's about to die.
     */
    export type OnPlayerDeathListener = (player: IsoPlayer) => void;
    /**
     * Triggered while the player is moving.
     *
     * @param player The player who's moving.
     */
    export type OnPlayerMoveListener = (player: IsoPlayer) => void;
    /**
     * Triggered when a player is being updated.
     *
     * @param player The player whose being updated.
     */
    export type OnPlayerUpdateListener = (player: IsoPlayer) => void;
    /**
     * Triggered after the distribution merge.
     */
    export type OnPostDristributionMergeListener = () => void;
    /**
     * Triggered after a floor layer is rendered.
     *
     * @param z The z coordinate of the layer which was rendered.
     */
    export type OnPostFloorLayerDrawListener = (z: number) => void;
    /**
     * Triggered after a cell is loaded.
     *
     * @param cell The cell which was loaded.
     * @param worldX The world z coordinate of the cell which was loaded.
     * @param worldY The world y coordinate of the cell which was loaded.
     */
    export type OnPostMapLoadListener = (cell: IsoCell, worldX: number, worldY: number) => void;
    /**
     * Triggered every time after a frame is rendered in-game.
     */
    export type OnPostRenderListener = () => void;
    /**
     * Triggered after a game has been saved.
     */
    export type OnPostSaveListener = () => void;
    /**
     * Triggered by UI Manager in its render function after the UI has been drawn.
     */
    export type OnPostUIDrawListener = () => void;
    /**
     * Triggered before the distribution merge.
     */
    export type OnPreDistributionMergeListener = () => void;
    /**
     * Triggered before context menus get filled with options.
     *
     * @param player The player for which the context menu is being filled.
     * @param context The context menu to be filled.
     * @param items The items available in the player inventory.
     */
    export type OnPreFillInventoryObjectContextMenuListener = (player: IsoPlayer, context: KahluaTable, items: KahluaTable) => void;
    /**
     * Triggered before context menu for world objects is filled.
     *
     * @param player The player for which the context menu is being filled.
     * @param context The context menu to be filled.
     * @param worldObjects The world objects available nearby the player.
     * @param test True if called for the purpose of testing for nearby objects.
     */
    export type OnPreFillWorldObjectContextMenuListener = (player: IsoPlayer, context: KahluaTable, worldObjects: KahluaTable, test: boolean) => void;
    /**
     * Triggered before a map is loaded.
     */
    export type OnPreMapLoadListener = () => void;
    /**
     * Triggered when a player hits the button to rack a firearm.
     *
     * @param player The player who's racking the firearm.
     * @param firearm The firearm which is being racked.
     */
    export type OnPressRackButtonListener = (player: IsoPlayer, firearm: HandWeapon) => void;
    /**
     * Triggered when a player hits the button to reload a firearm.
     *
     * @param player The player who's reloading the firearm.
     * @param firearm The firearm which is being reloaded.
     */
    export type OnPressReloadButtonListener = (player: IsoPlayer, firearm: HandWeapon) => void;
    /**
     * Triggered by UI Manager in its render function before the UI gets drawn.
     */
    export type OnPreUIDrawListener = () => void;
    /**
     * Triggered when it stops raining.
     */
    export type OnRainStopListener = () => void;
    /**
     * Triggered when the game client is receiving GlobalModData from the server.
     *
     * @param key The key for the ModData that has been received.
     * @param modData The ModData that has been received.
     */
    export type OnReceiveGlobalModDataListener = (key: string, modData: KahluaTable) => void;
    /**
     * Triggered when a player is receiving a list of items from another player.
     *
     * @param sender The player who's sending the item list.
     * @param itemList The list of items that is being received.
     * @param receiver The player who's receiving the item list.
     * @param sessionID The session identifier for the transaction.
     * @param custom TODO
     */
    export type OnReceiveItemListNetListener = (sender: IsoPlayer, itemList: ArrayList<any>, receiver: IsoPlayer, sessionID: string, custom: string) => void;
    /**
     * Triggered when the game client is receiving user log from the server.
     *
     * @param username The username for which we're receiving the log.
     * @param result The resulting log.
     */
    export type OnReceiveUserlogListener = (username: string, result: ByteBuffer) => void;
    /**
     * Triggered during the process of refreshing inventory containers.
     *
     * @param iSInventoryPage The inventory page being refreshed.
     * @param state The current state of the refresh process. Possible values are `begin`, `beforeFloor`, `buttonsAdded`, or `end`.
     */
    export type OnRefreshInventoryWindowContainersListener = (iSInventoryPage: any, state: string) => void;
    /**
     * Triggered every time the display is being rendered.
     */
    export type OnRenderTickListener = () => void;
    /**
     * Triggered when Lua is being reset.
     *
     * @param reason The reason why Lua was reset.
     */
    export type OnResetLuaListener = (reason: string) => void;
    /**
     * Triggered when game resolution has changed.
     *
     * @param oldWidth The old width of the screen.
     * @param oldHeight The old height of the screen.
     * @param newWidth The new width of the screen.
     * @param newHeight The new height of the screen.
     */
    export type OnResolutionChangeListener = (oldWidth: number, oldHeight: number, newWidth: number, newHeight: number) => void;
    /**
     * Triggered when right mouse button is down.
     *
     * @param x The x coordinate where the right mouse button was pressed down.
     * @param y The y coordinate where the right mouse button was pressed down.
     */
    export type OnRightMouseDownListener = (x: number, y: number) => void;
    /**
     * Triggered when mouse button is released.
     *
     * @param x The x coordinate where the right mouse button was released.
     * @param y The y coordinate where the right mouse button was released.
     */
    export type OnRightMouseUpListener = (x: number, y: number) => void;
    /**
     * Triggered when the safehouse is being changed.
     */
    export type OnSafehousesChangedListener = () => void;
    /**
     * Triggered during the game's saving process.
     */
    export type OnSaveListener = () => void;
    /**
     * Triggered when multiplayer scoreboard is updated.
     *
     * @param playerNames The list of player names which are being updated on the score board.
     * @param displayName The list of display names for the players which are being updated on the score board.
     * @param steamIDs The list of Steam identifiers of the players which are being updated on the score board.
     */
    export type OnScoreboardUpdateListener = (playerNames: ArrayList<string>, displayNames: ArrayList<string>, steamIDs: ArrayList<string>) => void;
    /**
     * Triggered for each room about to get spawned, the first time a character gets close enough to the building where the room is located.
     *
     * @param room The room about to get spawned.
     */
    export type OnSeeNewRoomListener = (room: zombie.iso.areas.IsoRoom) => void;
    /**
     * Triggered when a command from the server is being received.
     *
     * @param module The name of the module for this server command.
     * @param command The text of the actual server command.
     * @param args The list of arguments of the server command.
     */
    export type OnServerCommandListener = (module: string, command: string, args: KahluaTable) => void;
    /**
     * Triggered when the server is done saving.
     */
    export type OnServerFinishSavingListener = () => void;
    /**
     * Triggered when the game server has started.
     */
    export type OnServerStartedListener = () => void;
    /**
     * Triggered when the server starts saving.
     */
    export type OnServerStartSavingListener = () => void;
    /**
     * Triggered when the game client receives statistics from the server.
     */
    export type OnServerStatisticReceivedListener = () => void;
    export type OnServerWorkshopItemsListener = (state: string, data: ArrayList<any | number | string>, data2: number | string, data3: number) => void;
    /**
     * Triggered when the default chat tab has been set.
     *
     * @param chatTab The chat tab that is being set as default.
     */
    export type OnSetDefaultTabListener = (chatTab: ChatTab) => void;
    /**
     * Triggered when the server global object system is being initialized.
     */
    export type OnSGlobalObjectSystemInitListener = () => void;
    /**
     * Triggered after spawn regions are loaded. This event is triggered on the server.
     *
     * @param spawnRegions A table of spawn regions that have been loaded.
     */
    export type OnSpawnRegionsLoadedListener = (spawnRegions: KahluaTable) => void;
    /**
     * Triggered when the status of a friend changed on Steam.
     *
     * @param steamID Steam identifier of the user who's friend status has changed.
     */
    export type OnSteamFriendStatusChangedListener = (steamID: string) => void;
    /**
     * Triggered when joining a game through Steam.
     */
    export type OnSteamGameJoinListener = () => void;
    /**
     * Triggered when the list of public Internet servers is being refreshed.
     */
    export type OnSteamRefreshInternetServersListener = () => void;
    /**
     * TODO
     *
     * @param host TODO
     * @param port TODO
     * @param rulesTable TODO
     */
    export type OnSteamRulesRefreshCompleteListener = (host: string, port: number, rulesTable: KahluaTable) => void;
    /**
     * TODO
     *
     * @param host TODO
     * @param port TODO
     */
    export type OnSteamServerFailedToRespond2Listener = (host: string, port: number) => void;
    /**
     * TODO
     *
     * @param serverIndex TODO
     */
    export type OnSteamServerRespondedListener = (serverIndex: number) => void;
    /**
     * TODO
     *
     * @param host TODO
     * @param port TODO
     * @param server TODO
     */
    export type OnSteamServerResponded2Listener = (host: string, port: number, server: Server) => void;
    /**
     * Triggered after a new Steam workshop item was successfully created.
     *
     * @param steamID The Steam identifier of the user who created the workshop item.
     * @param userNeedsToAcceptWorkshopLegalAgreement Whether the user has to accept the workshop legal agreement.
     */
    export type OnSteamWorkshopItemCreatedListener = (steamID: string, userNeedsToAcceptWorkshopLegalAgreement: boolean) => void;
    /**
     * Triggered when a Steam workshop item couldn't be created.
     *
     * @param result The result code indicating why the workshop item was not created.
     */
    export type OnSteamWorkshopItemNotCreatedListener = (result: number) => void;
    /**
     * Triggered when a Steam workshop item couldn't be updated.
     *
     * @param result The result code indicating why the workshop item was not updated.
     */
    export type OnSteamWorkshopItemNotUpdatedListener = (result: number) => void;
    /**
     * Triggered after a Steam workship item was successfully updated.
     *
     * @param userNeedsToAcceptWorkshopLegalAgreement Whether the user has to accept the workshop legal agreement.
     */
    export type OnSteamWorkshopItemUpdatedListener = (userNeedsToAcceptWorkshopLegalAgreement: boolean) => void;
    /**
     * Triggered when a character is switching seat in a vehicle.
     *
     * @param player The player who's switching seat in the vehicle.
     */
    export type OnSwitchVehicleSeatListener = (player: IsoPlayer) => void;
    /**
     * Triggered when a chat tab is added.
     *
     * @param tabTitle The name of the chat tab which was added.
     * @param tabID The identifier of the chat tab which was added.
     */
    export type OnTabAddedListener = (tabTitle: string, tabID: number) => void;
    /**
     * Triggered when a chat tab is closed.
     *
     * @param tabTitle The name of the chat tab which was added.
     * @param tabID The identifier of the chat tab which was added.
     */
    export type OnTabRemovedListener = (tabTitle: string, tabID: number) => void;
    /**
     * Triggered when a thunderstorm is about to start.
     *
     * @param x The x coordinate where the thunder event is going to take place.
     * @param y The y coordinate where the thunder event is going to take place.
     * @param strike Whether the thunder event will strike.
     * @param light Whether the thunder event will emit light.
     * @param rumble Whether the thunder event will rumble.
     */
    export type OnThunderEventListener = (x: number, y: number, strike: boolean, light: boolean, rumble: boolean) => void;
    /**
     * Triggered every tick, try to not use this one, use EveryTenMinutes instead because it can create a lot of frame loss/garbage collection.
     *
     * @param numberTicks The number of ticks.
     */
    export type OnTickListener = (numberTicks: number) => void;
    /**
     * Same as OnTick, but triggered when the game is paused as well.
     *
     * @param numberTicks The number of ticks.
     */
    export type OnTickEvenPausedListener = (numberTicks: number) => void;
    /**
     * Triggered when a tile object has been removed.
     *
     * @param object The object to be removed.
     */
    export type OnTileRemovedListener = (object: IsoObject) => void;
    /**
     * Triggered when search mode is being toggled.
     *
     * @param player The player who's toggling search mode.
     * @param isSearchMode Whether search mode is being enabled or disabled.
     */
    export type OnToggleSearchModeListener = (player: IsoPlayer, isSearchMode: boolean) => void;
    /**
     * Called when a player enters the trigger area of a NPC event.
     *
     * @param triggerType The type of trigger of this NPC event.
     * @param modData The ModData of this trigger.
     * @param buildingDefinition The building definition of this trigger.
     */
    export type OnTriggerNPCEventListener = (triggerType: string, modData: KahluaTable, buildingDefinition: BuildingDef) => void;
    /**
     * TODO
     */
    export type OnUpdateIconListener = () => void;
    /**
     * Triggered when the modded weather sage is being updated.
     *
     * @param period The current weather period.
     * @param stage The current stage of the weather.
     * @param strength The strength of the air front.
     */
    export type OnUpdateModdedWeatherStageListener = (period: WeatherPeriod, stage: WeatherStage, strength: number) => void;
    /**
     * Triggered when a character is using a vehicle.
     *
     * @param player The player who's driving the vehicle.
     * @param baseVehicle The vehicle which the player is driving.
     * @param pressedNotTapped Whether the player had been keeping the accelerator pressed or if it was just a tap.
     */
    export type OnUseVehicleListener = (player: IsoPlayer, baseVehicle: BaseVehicle, pressedNotTapped: boolean) => void;
    /**
     * Triggered when the texture of a vehicle part is changed after being damaged.
     *
     * @param character The player who's driving the vehicle.
     */
    export type OnVehicleDamageTextureListener = (character: IsoGameCharacter) => void;
    /**
     * Triggered when a character is using a vehicle horn.
     *
     * @param player The player who's driving the vehicle.
     * @param baseVehicle The vehicle that the player is driving.
     * @param pressed Whether the vehicle horn is being pressed.
     */
    export type OnVehicleHornListener = (player: IsoPlayer, baseVehicle: BaseVehicle, pressed: boolean) => void;
    /**
     * Triggered when the amount of water in an object has changed.
     *
     * @param object The object in which the water amount is changing.
     * @param waterAmount The amount of water that is being added or removed from the water container.
     */
    export type OnWaterAmountChangeListener = (object: IsoObject, waterAmount: number) => void;
    /**
     * Triggered when a character has been hit by a weapon.
     *
     * @param wielder The character whose weapon hit another character.
     * @param character The character who's been hit by another character.
     * @param handWeapon The hand weapon used to hit the character.
     * @param damage The damage inflicted to the character who's been hit.
     */
    export type OnWeaponHitCharacterListener = (wielder: IsoGameCharacter, character: IsoGameCharacter, handWeapon: HandWeapon, damage: number) => void;
    /**
     * Triggered when a character hits a tree with a hand weapon.
     *
     * @param character The character whose weapon hit a tree.
     * @param handWeapon The hand weapon used to hit the tree.
     */
    export type OnWeaponHitTreeListener = (character: IsoGameCharacter, handWeapon: HandWeapon) => void;
    /**
     * Triggered when a player is gaining XP for a successful hit.
     *
     * @param player The player who's wielding the weapon.
     * @param handWeapon The hand weapon used to perform the attack.
     * @param character The character who's being hit.
     * @param damageSplit The damage split of the hit.
     */
    export type OnWeaponHitXPListener = (player: IsoPlayer, handWeapon: HandWeapon, character: IsoGameCharacter, damageSplit: number) => void;
    /**
     * Triggered when a player swings a hand weapon.
     *
     * @param character The character who's wielding the weapon.
     * @param handWeapon The hand weapon that is being wielded.
     */
    export type OnWeaponSwingListener = (character: IsoGameCharacter, handWeapon: HandWeapon) => void;
    /**
     * Triggered when a hand weapon has reached the apex of its swing.
     *
     * @param character The character who's wielding the weapon.
     * @param handWeapon The hand weapon that is being wielded.
     */
    export type OnWeaponSwingHitPointListener = (character: IsoGameCharacter, handWeapon: HandWeapon) => void;
    /**
     * Triggered when a weather period is complete.
     *
     * @param weatherPeriod The weather period.
     */
    export type OnWeatherPeriodCompleteListener = (weatherPeriod: WeatherPeriod) => void;
    /**
     * Triggered when a weather period stage starts.
     *
     * @param weatherPeriod The weather period.
     */
    export type OnWeatherPeriodStageListener = (weatherPeriod: WeatherPeriod) => void;
    /**
     * Triggered when a weather period starts.
     *
     * @param weatherPeriod The weather period.
     */
    export type OnWeatherPeriodStartListener = (weatherPeriod: WeatherPeriod) => void;
    /**
     * Triggered when a weather period stops.
     *
     * @param weatherPeriod The weather period.
     */
    export type OnWeatherPeriodStopListener = (weatherPeriod: WeatherPeriod) => void;
    /**
     * Triggered when a sound is being played.
     *
     * @param x The x coordinate of the sound.
     * @param y The y coordinate of the sound.
     * @param z The z coordinate of the sound.
     * @param radius The radius of the sound.
     * @param volume The volume of the sound.
     * @param source The object that triggered the sound.
     */
    export type OnWorldSoundListener = (x: number, y: number, z: number, radius: number, volume: number, source: IsoObject) => void;
    /**
     * Triggered when a zombie dies.
     *
     * @param zombie The zombie who's about to get killed.
     */
    export type OnZombieDeadListener = (zombie: IsoZombie) => void;
    /**
     * Triggered when a zombie is being updated.
     *
     * @param zombie The zombie who's being updated.
     */
    export type OnZombieUpdateListener = (zombie: IsoZombie) => void;
    /**
     * Triggered before foraging category definitions are being added.
     *
     * @param forageSystem The forage system object.
     */
    export type PreAddCatDefinitionsListener = (forageSystem: KahluaTable) => void;
    /**
     * Triggered before foraging definitions are being added.
     *
     * @param forageSystem The forage system object.
     */
    export type PreAddForageDefinitionsListener = (forageSystem: KahluaTable) => void;
    /**
     * Triggered before foraging item definitions are being added.
     *
     * @param forageSystem The forage system object.
     */
    export type PreAddItemDefinitionsListener = (forageSystem: KahluaTable) => void;
    /**
     * Triggered before foraging zone definitions are being added.
     *
     * @param forageSystem The forage system object.
     */
    export type PreAddZoneDefinitionsListener = (forageSystem: KahluaTable) => void;
    /**
     * Triggered when a player is invited to join a faction.
     *
     * @param factionName The name of the faction for which the player received an invitation.
     * @param playerName The name of the player who's been invited to join the faction.
     */
    export type ReceiveFactionInviteListener = (factionName: string, playerName: string) => void;
    /**
     * Triggered when a player is invited to a safehouse.
     *
     * @param safeHouse The safehouse for which the player received an invitation.
     * @param playerName The name of the player who's been invited to join the safehouse.
     */
    export type ReceiveSafehouseInviteListener = (safeHouse: SafeHouse, playerName: string) => void;
    /**
     * Triggered when a character is requesting a trade with another character.
     *
     * @param player The player who's requesting the trade.
     */
    export type RequestTradeListener = (player: IsoPlayer) => void;
    /**
     * Triggered when a grid square is being reused.
     *
     * @param sqaure The grid square that is going to be reused.
     */
    export type ReuseGridSquareListener = (square: IsoGridSquare) => void;
    /**
     * Triggered when the game server is sending custom ModData to the client.
     */
    export type SendCustomModDataListener = () => void;
    /**
     * Triggered when the game client receives the response after intiating a ping to a server.
     *
     * @param ipAddress The IP address of the user who pinged the server.
     * @param user The name of the user who pinged the server.
     */
    export type ServerPingedListener = (ipAddress: string, user: string) => void;
    /**
     * Triggered when a user presses TAB on his keyboard to switch chat stream.
     */
    export type SwitchChatStreamListener = () => void;
    /**
     * Triggered when a faction is being synced by the server on client side.
     *
     * @param factionName The name of the faction which is going to get synchronized.
     */
    export type SyncFactionListener = (factionName: string) => void;
    /**
     * Triggered when a player adds an item to a trade.
     *
     * @param player The player who's adding an item to the trade.
     * @param inventoryItem The item which the player is adding to the trade.
     */
    export type TradingUIAddItemListener = (player: IsoPlayer, inventoryItem: InventoryItem) => void;
    /**
     * Triggered when a player removes an item from a trade.
     *
     * @param player The player who's removing an item from the trade.
     * @param itemIndex The index of the item that the player is removing from the trade.
     */
    export type TradingUIRemoveItemListener = (player: IsoPlayer, itemIndex: number) => void;
    /**
     * Triggered when a player updates the item state of a trade.
     *
     * @param player The player who's updating an item.
     * @param itemIndex The index of the item that the player is updating.
     */
    export type TradingUIUpdateStateListener = (player: IsoPlayer, itemIndex: number) => void;
    /**
     * Triggered when the game client is receiving tickets from the server.
     *
     * @param tickets The buffer where to write the tickets.
     */
    export type ViewTicketsListener = (tickets: ByteBufferWriter) => void;
}

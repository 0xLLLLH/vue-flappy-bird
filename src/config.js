let appSettings = {
    width: 600,
    height: 800,
    speed: 3,
    refreshInterval: 30
};

let landSettings = {
    unitCount: 23,
    speed: appSettings.speed
};
landSettings.unitWidth = appSettings.width / landSettings.unitCount;


export default {
    app: appSettings,
    land: landSettings
};

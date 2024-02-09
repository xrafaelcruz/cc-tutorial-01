const { ccclass } = cc._decorator;

@ccclass
export default class SceneStartGame extends cc.Component {
    loadedMainScene = false;

    preloadMainScene() {
        cc.director.preloadScene('SceneMain', () => {
            this.loadedMainScene = true;
        });
    }

    gameEvent() {
        console.log('gameEvent!!');
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.game.on('gameEvent', this.gameEvent);

        this.preloadMainScene();
    }
}

import ComponentLoadingButton from './components/ComponentLoadingButton';

const { ccclass } = cc._decorator;

@ccclass
export default class SceneStartGame extends cc.Component {
    loadedMainScene = false;
    componentLoadingButton: ComponentLoadingButton = null;

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
        // this.componentLoadingButton = cc.find('LoadScene/ComponentLoadingButton/Background/Label');
        this.componentLoadingButton = this.node.getComponentInChildren(ComponentLoadingButton);
        this.componentLoadingButton.sceneStartGame = this;

        cc.game.on('gameEvent', this.gameEvent);

        this.preloadMainScene();
    }
}

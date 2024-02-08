import LoadingButtonComponent from './components/LoadingButtonComponent';

const { ccclass } = cc._decorator;

@ccclass
export default class LoadScene extends cc.Component {
    loadedMainScene = false;
    loadingButtonComponent: LoadingButtonComponent = null;

    preloadMainScene() {
        cc.director.preloadScene('MainScene', () => {
            this.loadedMainScene = true;
        });
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.loadingButtonComponent = cc.find('LoadScene/LoadingButtonComponent/Background/Label');
        this.loadingButtonComponent = this.node.getComponentInChildren(LoadingButtonComponent);
        this.loadingButtonComponent.loadScene = this;

        this.preloadMainScene();
    }
}

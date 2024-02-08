import LoadScene from '../LoadScene';

const { ccclass } = cc._decorator;

const fakePromise = new Promise(resolve => setTimeout(resolve, 3000));

@ccclass
export default class LoadingButtonComponent extends cc.Component {
    loadScene: LoadScene = null;

    handleClick() {
        console.log('click', this.loadScene.loadedMainScene);

        cc.game.emit('gameEvent');

        if (this.loadScene.loadedMainScene) {
            cc.director.loadScene('MainScene');

            this.node.emit('customClick', { teste: 1 });
        }
    }

    handleCustomClick(args) {
        console.log('handleCustomClick', args);
    }

    // LIFE-CYCLE CALLBACKS:

    onEnable() {
        this.node.on('click', this.handleClick, this);
        this.node.on('customClick', this.handleCustomClick, this);
    }

    onDisable() {
        this.node.off('click', this.handleClick, this);
        this.node.off('customClick', this.handleCustomClick, this);
    }

    async onLoad() {
        await fakePromise.then(() => {
            const label = this.node.getComponentInChildren(cc.Label);
            label.string = 'Começar!';
        });
    }
}

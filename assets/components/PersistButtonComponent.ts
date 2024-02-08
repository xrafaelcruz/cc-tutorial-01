const { ccclass } = cc._decorator;

@ccclass
export default class PersistButtonComponent extends cc.Component {
    onLoad() {
        cc.game.addPersistRootNode(this.node);
    }
}

($ => {
    "use strict";

    $.storageSessionHelper = function (b) {
        const storageSession = $.api.storage && $.api.storage.session;

        // Safari 16.4+ exposes storage.session; 
        // older Safari (and some other browsers) do not.
        if (!storageSession) {
            this.set = () => Promise.resolve();
            this.get = () => Promise.resolve({});
            this.remove = () => Promise.resolve();
            this.clear = () => Promise.resolve();
            return;
        }

        this.set = (opt) => storageSession.set(opt.params);
        this.get = (opt) => storageSession.get(opt.params);
        this.remove = (opt) => storageSession.remove(opt.params);
        this.clear = () => storageSession.clear();
    };
})(jsu);
interface Config {
    editor: {
        saveDelay: number
        autoSave: boolean
        saveMethod: 'on_change' | 'on_blur'
    }

    notification: {
        showSaveNotification: boolean
        notificationTimeout: number
    }
}

const config: Config = {
    editor: {
        autoSave: true,
        saveMethod: 'on_blur',

        // only if the saveMethod is on_blur, saveDelay is e applicable
        saveDelay: 500,
    },

    notification: {
        showSaveNotification: false,
        notificationTimeout: 1000,
    },
}

export default config

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE: string;
    readonly VITE_EMAILJS_TEMPLATE: string;
    readonly VITE_EMAILJS_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
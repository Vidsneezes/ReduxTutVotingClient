module.exports = {
    "extends": "airbnb",
    "rules": {
        "linebreak-style": ["error", "windows"],
        "indent": ["error", 4],
        "comma-dangle": ["warn", "never"],
        "quotes": [0, "double"]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
        "document": true,
        "describe": true,
        "it": true
    }
};
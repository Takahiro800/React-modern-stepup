# 保存時に自動整形したい

[参考サイト](https://www.javaer101.com/en/article/52285279.html)

```json
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

- 保存時の autoSave は常に設定しているので言語ごとに設定する必要なし

# React で HTML タグうを自動補完して欲しい

[参考サイト](https://cloud6.net/so/reactjs/1454250)

```json
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
    // any other languages you'd like
},
"emmet.showExpandedAbbreviation": "always"
```

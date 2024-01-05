Инструкция по использованию MemoryRouterProvider.

В данной инструкции будет рассмотрено 2 случая использования MemoryRouterProvider:

1. Нужно протестировать все приложение целиком на разных роутах.
```ts
<MemoryRouterProvider initialEntries={['/graphiql']} />
```
Отрендерится все приложение на роуте '/graphiql'

2. Нужно протестировать отдельный компонент, для рендера которого необходим роутер.
```ts
<MemoryRouterProvider initialEntries={['/']}>
  <MyComponent />
</MemoryRouterProvider>
```
Отрендерится MyComponent только на роуте '/', на других роутах будет ошибка

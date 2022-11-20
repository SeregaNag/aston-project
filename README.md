# Требования к проекту

REACT
1. ✅Пишем функциональные компоненты c хуками в приоритете над классовыми. 
2. ✅Есть четкое разделение на умные и глупые компоненты(не совсем четкое, [Home](https://github.com/SeregaNag/aston-project/blob/main/src/pages/home/Home.js) (умный), [HeroList](https://github.com/SeregaNag/aston-project/blob/main/src/components/HeroList.js), HeroList несколько раз переиспользовался, а Home это просто контейнер без стилей)
3. ✅ Есть рендеринг списков [HeroList](https://github.com/SeregaNag/aston-project/blob/main/src/components/HeroList.js), [HeroMatches](https://github.com/SeregaNag/aston-project/blob/main/src/components/HeroMatches.js)
4. ✅Реализована хотя бы одна форма [login](https://github.com/SeregaNag/aston-project/blob/main/src/pages/login/Login.js)
5. ✅Есть применение Контекст API [AuthContext](https://github.com/SeregaNag/aston-project/blob/main/src/context/AuthContext.js), авторизация реализована с помощью контекста
6. ✅Есть применение предохранителя [ErrorBoundary](https://github.com/SeregaNag/aston-project/blob/main/src/components/ErrorBoundary.js) работает, при ошибках не просто сообщение в консоль, а сообщение на экране
7. ✅Есть хотя бы один кастомный хук [useAuthContext](https://github.com/SeregaNag/aston-project/blob/main/src/hooks/useAuthContext.js)
8. ✅Хотя бы несколько компонентов используют PropTypes [HeroList](https://github.com/SeregaNag/aston-project/blob/main/src/components/HeroList.js), [HeroMatches](https://github.com/SeregaNag/aston-project/blob/main/src/components/HeroMatches.js)
9. ❌Поиск не должен триггерить много запросов к серверу(поиск реализовать не получилось, потому что OpenDota API, не поддерживает поиск по героям)
10. ✅Есть применение lazy + Suspense [PersonPage](https://github.com/SeregaNag/aston-project/blob/main/src/pages/personPage/PersonPage.js) (можно нажать на кнопку и данные лениво подгрузятся)

REDUX
1. ✅Используем Modern Redux with Redux Toolkit [Папка store](https://github.com/SeregaNag/aston-project/tree/main/src/store)
2. ❌Используем слайсы (Состояние избранного хранится в сторе, а стор 'подписан' на локальное хранилище, чтобы данные не пропадали при перезагрузке страницы, реализовано на обычных экшенах и редьюсерах, была попытка изменить логику на слайсы, но в [localStorage](https://github.com/SeregaNag/aston-project/blob/main/src/utils/localStorage.js) не получалось применить JSON.parse на данные, так и не разобрался в чем причина)
3. ✅Есть хотя бы одна кастомная мидлвара [loggerMiddleware](https://github.com/SeregaNag/aston-project/blob/main/src/store/store.js) при изменении стора в зависимости от типа экшена выдают пользователю сообщение при помощи модального окна
4. ❌Используется RTK Query
5. ❌Используется Transforming Responses

#Функионал

Не реализован поиск и история поиска, в качестве API использован [OpenDota API](https://docs.opendota.com/) (Heroes и HeroStats). Регистрация пользователя при помощи firebase, UI библиотека не использовалась

#Резюмируя 
Резюмируя хочу сказать, что возникли проблемы с Redux'ом, сам концепт понятен, а вот с реализацией этого концепта тяжело, из-за отсутствия опыта работы с этой библиотекой.

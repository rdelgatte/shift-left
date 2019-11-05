module Main exposing (Language, LanguageCategory(..), Person(..), firstLanguageForCategory)


type LanguageCategory
    = Front
    | Back


type alias Language =
    { name : String
    , category : LanguageCategory
    }


type Person
    = Developer String (List Language)
    | ProductOwner String


firstLanguageForCategory : LanguageCategory -> Person -> Maybe Language
firstLanguageForCategory category person =
    case person of
        Developer _ languages ->
            languages
                |> List.filter (\language -> language.category == category)
                |> List.head

        ProductOwner _ ->
            Nothing

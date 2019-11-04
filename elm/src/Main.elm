module Main exposing (Language, LanguageCategory(..), Person(..), firstRankedLanguageForCategory)


type LanguageCategory
    = Front
    | Back


type alias Language =
    { name : String
    , category : LanguageCategory
    }


type alias Rank =
    Int


type alias Name =
    String


type alias RankedLanguage =
    ( Language, Rank )


type Person
    = Developer Name (List RankedLanguage)
    | ProductOwner Name


firstRankedLanguageForCategory : LanguageCategory -> Person -> Maybe ( Language, Rank )
firstRankedLanguageForCategory category person =
    case person of
        Developer _ rankedLanguages ->
            rankedLanguages
                |> List.filter (\( language, _ ) -> language.category == category)
                |> List.sortBy Tuple.second
                |> List.head

        _ ->
            Nothing

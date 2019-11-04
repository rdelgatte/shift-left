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


type Person
    = Developer Name (List ( Language, Rank ))
    | ProductOwner Name
    | ScrumMaster Name


firstRankedLanguageForCategory : Person -> LanguageCategory -> Maybe ( Language, Rank )
firstRankedLanguageForCategory person category =
    case person of
        Developer _ rankedLanguages ->
            rankedLanguages
                |> List.sortBy Tuple.second
                |> List.filter (\( language, _ ) -> language.category == category)
                |> List.head

        _ ->
            Nothing

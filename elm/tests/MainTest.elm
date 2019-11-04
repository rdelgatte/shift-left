module MainTest exposing (developerWithMixedLanguagesForCategory, developerWithoutRankedLanguages, scrumMaster)

import Expect
import Main exposing (Language, LanguageCategory(..), Person(..), firstRankedLanguageForCategory)
import Test exposing (Test, test)


haskell : Language
haskell =
    Language "Haskell" Back


java : Language
java =
    Language "Java" Back


javascript : Language
javascript =
    Language "Javascript" Back


scrumMaster : Test
scrumMaster =
    test "Giving a non-developer user, then it should return Nothing" <|
        \_ ->
            let
                result =
                    firstRankedLanguageForCategory (ScrumMaster "Joe-Han") Front
            in
            Expect.equal result Nothing


developerWithoutRankedLanguages : Test
developerWithoutRankedLanguages =
    test "Giving a developer without ranked languages for the provided category, then it should return Nothing" <|
        \_ ->
            let
                developer =
                    Developer "Julien" [ ( haskell, 1 ) ]

                result =
                    firstRankedLanguageForCategory developer Front
            in
            Expect.equal result Nothing


developerWithMixedLanguagesForCategory : Test
developerWithMixedLanguagesForCategory =
    test "Giving a developer with mixed category languages, then it should return the first one for the provided category" <|
        \_ ->
            let
                developer =
                    Developer "Rémi"
                        [ ( haskell, 1 )
                        , ( java, 2 )
                        , ( javascript, 3 )
                        ]

                result =
                    firstRankedLanguageForCategory developer Back
            in
            Expect.equal result (Just ( haskell, 1 ))

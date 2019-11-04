module MainTest exposing (developerWithMixedLanguagesForBack, developerWithoutFrontRankedLanguages, productOwner)

import Expect
import Main exposing (Language, LanguageCategory(..), Person(..), firstRankedLanguageForCategory)
import Test exposing (Test, test)


haskell : Language
haskell =
    Language "Haskell" Back


java : Language
java =
    Language "Java" Back


elm : Language
elm =
    Language "Elm" Front


productOwner : Test
productOwner =
    test "Giving a product owner, then it should return Nothing" <|
        \_ ->
            ProductOwner "Sok"
                |> firstRankedLanguageForCategory Front
                |> Expect.equal Nothing


developerWithoutFrontRankedLanguages : Test
developerWithoutFrontRankedLanguages =
    test "Giving a developer without ranked languages for Front, then it should return Nothing" <|
        \_ ->
            Developer "Julien" [ ( haskell, 1 ) ]
                |> firstRankedLanguageForCategory Front
                |> Expect.equal Nothing


developerWithMixedLanguagesForBack : Test
developerWithMixedLanguagesForBack =
    test "Giving a developer with mixed category languages, then it should return the first one for Back" <|
        \_ ->
            Developer "Rémi"
                [ ( elm, 1 )
                , ( haskell, 1 )
                , ( java, 2 )
                ]
                |> firstRankedLanguageForCategory Back
                |> Expect.equal (Just ( haskell, 1 ))

module MainTest exposing (exceptionCases, nominalCases, specialCase)

import Expect exposing (equal)
import Main exposing (Language, LanguageCategory(..), Person(..), firstRankedLanguageForCategory)
import Test exposing (Test, describe, test)


haskell : Language
haskell =
    Language "Haskell" Back


java : Language
java =
    Language "Java" Back


elm : Language
elm =
    Language "Elm" Front


sok : Person
sok =
    ProductOwner "Sok"


julien : Person
julien =
    Developer "Julien"
        [ ( haskell, 1 )
        , ( java, 2 )
        ]


remi : Person
remi =
    Developer "Rémi"
        [ ( elm, 1 )
        , ( haskell, 2 )
        , ( java, 3 )
        ]


nominalCases : Test
nominalCases =
    describe "Nominal Cases" <|
        [ test "should return Elm when passing remi with Front" <|
            \_ ->
                remi
                    |> firstRankedLanguageForCategory Front
                    |> equal (Just ( elm, 1 ))
        , test "should return Haskell when passing remi with Back" <|
            \_ ->
                remi
                    |> firstRankedLanguageForCategory Back
                    |> equal (Just ( haskell, 2 ))
        , test "should return Haskell when passing julien with Back" <|
            \_ ->
                julien
                    |> firstRankedLanguageForCategory Back
                    |> equal (Just ( haskell, 1 ))
        , test "should return Nothing when passing julien with Front" <|
            \_ ->
                julien
                    |> firstRankedLanguageForCategory Front
                    |> equal Nothing
        , test "should return Nothing when passing sok with Front" <|
            \_ ->
                sok
                    |> firstRankedLanguageForCategory Front
                    |> equal Nothing
        , test "should return Nothing when passing sok with Back" <|
            \_ ->
                sok
                    |> firstRankedLanguageForCategory Back
                    |> equal Nothing
        ]


exceptionCases : Test
exceptionCases =
    describe "Exception/Breaking cases" <|
        [ test "will fail when passing null / null" <|
            \_ ->
                null
                    |> firstRankedLanguageForCategory null
                    |> equal Nothing
        , test "will fail when passing a malformed person" <|
            \_ ->
                Developer "Malformed"
                    |> firstRankedLanguageForCategory Front
                    |> equal Nothing
        , test "will fail when passing a user without any role neither rankedLanguages" <|
            \_ ->
                Person "No role"
                    |> firstRankedLanguageForCategory Front
                    |> equal Nothing
        ]


specialCase : Test
specialCase =
    describe "Special case (same behaviour but different meanings)" <|
        [ test "will pass even when providing a valid person with invalid language category" <|
            \_ ->
                remi
                    |> firstRankedLanguageForCategory "AnythingElse"
                    |> equal Nothing
        ]

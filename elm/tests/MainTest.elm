module MainTest exposing (nominalCases)

import Expect exposing (equal)
import Main exposing (Language, LanguageCategory(..), Person(..), firstLanguageForCategory)
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
    Developer "Julien" [ haskell, java ]


remi : Person
remi =
    Developer "Rémi" [ elm, haskell, java ]


nominalCases : Test
nominalCases =
    describe "Nominal Cases" <|
        [ test "should return Elm when passing remi with Front" <|
            \_ ->
                remi
                    |> firstLanguageForCategory Front
                    |> equal (Just elm)
        , test "should return Haskell when passing remi with Back" <|
            \_ ->
                remi
                    |> firstLanguageForCategory Back
                    |> equal (Just haskell)
        , test "should return Haskell when passing julien with Back" <|
            \_ ->
                julien
                    |> firstLanguageForCategory Back
                    |> equal (Just haskell)
        , test "should return Nothing when passing julien with Front" <|
            \_ ->
                julien
                    |> firstLanguageForCategory Front
                    |> equal Nothing
        , test "should return Nothing when passing sok with Front" <|
            \_ ->
                sok
                    |> firstLanguageForCategory Front
                    |> equal Nothing
        , test "should return Nothing when passing sok with Back" <|
            \_ ->
                sok
                    |> firstLanguageForCategory Back
                    |> equal Nothing
        ]



--exceptionCases : Test
--exceptionCases =
--    describe "Exception/Breaking cases" <|
--        [ test "will fail when passing null / null" <|
--            \_ ->
--                null
--                    |> firstLanguageForCategory null
--                    |> equal Nothing
--        , test "will fail when passing a malformed person" <|
--            \_ ->
--                Developer "Malformed"
--                    |> firstLanguageForCategory Front
--                    |> equal Nothing
--        , test "will fail when passing a user without any role neither languages" <|
--            \_ ->
--                Person "No role"
--                    |> firstLanguageForCategory Front
--                    |> equal Nothing
--        ]
--
--
--specialCase : Test
--specialCase =
--    describe "Special case (same behaviour but different meanings)" <|
--        [ test "will pass even when providing a valid person with invalid language category" <|
--            \_ ->
--                remi
--                    |> firstLanguageForCategory "AnythingElse"
--                    |> equal Nothing
--        ]

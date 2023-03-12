Feature: Buy Energy

    Scenario Outline: Scenario Outline name: Buy Energy Gas

        Given New customer clicks buy energy button on the home page
        And   Customer redirects to Buy - Candidate Test page
        And   Customer enters <gasNumberOfUnitsRequired> in Gas section
        When  Customer clicks buy CTA to buy Gas
        And   Customer redirects to sales confirmed page
        Then  Customer validates the remaining gas left in the store
        Examples:
            | gasNumberOfUnitsRequired |
            | 25                       |
            | -10                      |

    Scenario: Buy Energy Electricity

        Given New customer clicks buy energy button on the home page
        And   Customer redirects to Buy - Candidate Test page
        And   Customer enters number of units required in Electricity section
        When  Customer clicks buy CTA to buy Electricity
        And   Customer redirects to sales confirmed page
        Then  Customer validates the remaining electricity left in the store

    Scenario: Buy Energy Oil

        Given New customer clicks buy energy button on the home page
        And   Customer redirects to Buy - Candidate Test page
        And   Customer enters number of units required in Oil section
        When  Customer clicks buy CTA to buy Oil
        And   Customer redirects to sales confirmed page
        Then  Customer validates the remaining oil left in the store
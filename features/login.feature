
Feature: Login

        Scenario Outline: Verify successful login
            Given User on launch page
             Then I save the response value as "token"
             Then I use the saved value as a step
             Then User enter valid "<username>" and "<password>"

        Examples:
                  | username      | password     |
                  | standard_user | secret_sauce |


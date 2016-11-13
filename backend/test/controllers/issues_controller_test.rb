require 'test_helper'

class IssuesControllerTest < ActionDispatch::IntegrationTest
   fixtures :issues

   def test_create_issue
	    get "/issues"
	    assert_equal 200, status

	    # post the issue
	    post '/issues', params: { issue: {
                                        name: issues(:issue1).name,
                                        body: issues(:issue1).body,
                                        author_email: issues(:issue1).author_email,
                                        status: issues(:issue1).status
                                      }
                               }
	    issue = JSON.parse(response.body)
        assert_equal "issue1", issue['name']
   end
end

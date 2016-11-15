require 'test_helper'

class IssuesControllerTest < ActionDispatch::IntegrationTest
  fixtures :issues

  setup do
    @issue ||=  issues(:issue1)
  end

  def test_get_issues
    get "/issues"
    assert_equal 200, status
  end

  def test_create_issue
    post '/issues', params: {
      issue: {
        name: @issue.name,
        body: @issue.body,
        author_email: @issue.author_email,
        status: @issue.status
      }
    }

    issue = JSON.parse(response.body)
    assert_equal "issue1", issue['name']
  end

  def test_show_issue
    get issues_path(@issue.id)
    assert_equal 200, status
  end
end

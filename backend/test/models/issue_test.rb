require 'test_helper'

class IssueTest < ActiveSupport::TestCase

  def test_invalid_status
    issue_params = { name: 'foo', author_email: 'bar@foo.com', body: 'foo bar',
      status: 'error' }

    assert_raise(ArgumentError){ Issue.create(issue_params) }
  end


  def test_empty_status
    issue_params = { name: 'foo', author_email: 'bar@foo.com', body: 'foo bar' }
    issue = Issue.create(issue_params)
    assert_equal false, issue.valid?
  end

  def test_empty_status
    issue = Issue.create(name: 'foo', author_email: 'bar@foo.com',
      body: 'foo bar', status: 'open')

    assert_equal true, issue.persisted?
  end
end

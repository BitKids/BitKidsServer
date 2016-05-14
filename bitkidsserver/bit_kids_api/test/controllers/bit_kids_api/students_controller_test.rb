require 'test_helper'

module BitKidsApi
  class StudentsControllerTest < ActionDispatch::IntegrationTest
    include Engine.routes.url_helpers

    setup do
      @student = bit_kids_api_students(:one)
    end

    test "should get index" do
      get students_url
      assert_response :success
    end

    test "should create student" do
      assert_difference('Student.count') do
        post students_url, params: { student: { account_id: @student.account_id, device_id: @student.device_id, email_id: @student.email_id, handle: @student.handle, os: @student.os } }
      end

      assert_response 201
    end

    test "should show student" do
      get student_url(@student)
      assert_response :success
    end

    test "should update student" do
      patch student_url(@student), params: { student: { account_id: @student.account_id, device_id: @student.device_id, email_id: @student.email_id, handle: @student.handle, os: @student.os } }
      assert_response 200
    end

    test "should destroy student" do
      assert_difference('Student.count', -1) do
        delete student_url(@student)
      end

      assert_response 204
    end
  end
end

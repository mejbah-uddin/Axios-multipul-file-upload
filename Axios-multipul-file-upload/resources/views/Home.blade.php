@extends('Layout.app')

@section('title', 'Home')

@section('content')


<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Laravel Axios Multipul File Upload</h4>
                </div>
                <div class="card-body">
                <button class="btn btn-primary addBtn my-3 btn-sm">Add File</button>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>File</th>
                                <th>File Size</th>
                                <th>Cancle</th>
                                <th>Upload</th>
                                <th>Uploaded(MB)</th>
                                <th>Uploaded(%)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody class="fileList">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection

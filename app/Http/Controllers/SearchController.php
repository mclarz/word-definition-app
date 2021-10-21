<?php

namespace App\Http\Controllers;

use App\PreviousSearch;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SearchController extends Controller
{

    public function index()
    {
        return view('search');
    }

    public function history()
    {
        return view('history');
    }
    public function get(Request $request)
    {
        $searches = PreviousSearch::orderBy('created_at','DESC')->get();

        if ($searches) {
            return response()->json([
                'success' => true,
                'data' => $searches
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => []
        ]);

    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'search_key' => 'alpha|max:255',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $previous_search = PreviousSearch::create($request->all());

        return response()->json($previous_search);

    }

    public function removeHistory() {
        $delete = PreviousSearch::truncate();
    }

}

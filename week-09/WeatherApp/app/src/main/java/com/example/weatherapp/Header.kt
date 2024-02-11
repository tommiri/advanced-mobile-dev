package com.example.weatherapp

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp

@Composable
fun Header(text: String)
{
    Text(
        text = text,
        fontSize = 60.sp,
        textAlign = TextAlign.Center,
        modifier = Modifier
            .fillMaxWidth()
            .background(
                Color(140, 120, 190)
            )
    )
}


// Test component
@Preview
@Composable
fun HeaderPreview()
{
    Header("Tampere")
}